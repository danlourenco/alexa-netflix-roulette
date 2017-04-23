/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

const Alexa = require('alexa-sdk');
const constants = require('./constants/constants');

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
    this.emit(':tell', 'functionality coming soon!');
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
