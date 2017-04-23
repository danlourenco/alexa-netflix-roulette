/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

const Alexa = require('alexa-sdk');
const constants = require('./constants/constants');
const fetch = require('node-fetch');
const rp = require('request-promise');

const SPEECH_OUTPUT = `Let's find you something great to watch on Netflix. But first, I'll need a little information. You can say: get movie by, and then the actor or actresses' name.  What would you like to do?`;
const REPROMPT = `You can say: get movie by, and then the actor or actresses' name.`;

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
    let actorSlot = this.event.request.intent.slots.ActorName.value;
    if (actorSlot) {
      let uriEncodedActorName = actorSlot;
      rp('http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage')
        .then(function(res) {
          console.log(res);
          this.emit(':tell', `You said: ${actorSlot}. Functionality coming soon!`);
        })
        .catch(function(err) {
          console.log('there was an error ', err);
        });
      // fetch(`${constants.baseUrl}actor=${uriEncodedActorName}`)
      //   .then(function (res) {
      //     return res.json();
      //   }).then(function(json) {
      //     console.log(json);
      //     this.emit(':tell', `You said: ${actorSlot}. Functionality coming soon!`);
      //     context.succeed('Blah');
      //   }).catch(function(err) {
      //     console.log('there was an error');
      //   });



    }
    this.emit(':tell', `You didn't say an actor. try again.`);

  },

  'GetMovieByDirector': function () {
    this.emit(':tell', 'functionality coming soon!');
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
    // this.emit(':ask', GET_INTENT_REPROMPT, GET_INTENT_REPROMPT);
    this.emit(':ASK', REPROMPT, REPROMPT);
  },

  'Unhandled': function () {
    this.emitWithState('AMAZON.HelpIntent');
  }
}

/* eslint-enable */
