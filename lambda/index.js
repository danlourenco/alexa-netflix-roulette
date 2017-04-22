/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

const Alexa = require('alexa-sdk');
const constants = require('./constants/constants');

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
    // var petName = this.attributes['petName'];
    // if (petName) {
    //   this.emit(':ask', `Welcome back! Let's record some more data about ${petName}. ` +  GET_INTENT_REPROMPT, GET_INTENT_REPROMPT);
    // } else {
    //   this.handler.state = constants.states.ONBOARDING;
    //   this.emitWithState('NewSession');
    // }
    this.emit(':ask', `Let's find you something great to watch on Netflix. But first, I'll need a little information. You can say: get movie by, and then the actor or actresses' name.  What would you like to do?`, `You can say: get movie by, and then the actor or actresses' name.`);

  },

  'GetMovieByActor': function () {
    
  },

  'GetMovieByDirector': function () {

  }
}

/* eslint-enable */
