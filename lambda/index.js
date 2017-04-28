/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

const Alexa = require('alexa-sdk');
const randomItem = require('random-item');
const constants = require('./constants/constants');
const NetflixRouletteAPI = require('./helpers/netflixRouletteAPI');

const SPEECH_OUTPUT = `Let's find you something great to watch on Netflix. But first, I'll need a favorite actor or director to go by. To get a movie by actor, say: get movie starring, and then the actor or actresses' name. To get a movie by director, say: get movie directed by, and then the director's name. What would you like to do?`;
const REPROMPT = `To get a movie by actor, say: get movie starring, and then the actor or actresses' name. To get a movie by director, say: get movie directed by, and then the director's name. What would you like to do?`;

/* eslint-disable */
exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);

  alexa.appId = constants.appId;

  alexa.registerHandlers(
    handlers
  );
  alexa.execute();
};

const handlers = {
  'LaunchRequest': function() {
    this.emit(':ask', SPEECH_OUTPUT, REPROMPT);
  },

  'GetMovieByActor': function () {
    let actor = this.event.request.intent.slots.ActorName.value;
    if (actor) {
      NetflixRouletteAPI.GetMovieByActor(actor)
        .then( (movies) => {
          let randomMovie = randomItem(movies);
          this.emit(':tell', `Okay, here's a movie starring ${actor}: ${randomMovie.show_title}. Summary: ${randomMovie.summary}`);
        })
        .catch( (error) => {
          this.emit(':tell', `${error}`);
        });
      } else {
        this.emit(':ask', 'Sorry, I didn\'t get that.', REPROMPT);
      }
  },

  'GetMovieByDirector': function () {
    let director = this.event.request.intent.slots.DirectorName.value;
    if (director) {
      NetflixRouletteAPI.GetMovieByDirector(director)
        .then( (movies) => {
          let randomMovie = randomItem(movies);
          this.emit(':tell', `Okay, here's a movie directed by ${director}: ${randomMovie.show_title}. Summary: ${randomMovie.summary}`);
        })
        .catch( (error) => {
          this.emit(':tell', `${error}`);
        });
    } else {
      this.emit(':ask', 'Sorry, I didn\'t get that.', REPROMPT);
    }
  },

  'AMAZON.StopIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', 'Goodbye!');
  },

  'AMAZON.CancelIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', 'Goodbye!');
  },

  'AMAZON.HelpIntent': function () {
    this.emit(':ask', REPROMPT, REPROMPT);
  },

  'Unhandled': function () {
    this.emitWithState('AMAZON.HelpIntent');
  }
}

/* eslint-enable */
