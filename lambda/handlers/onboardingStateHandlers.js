var Alexa = require('alexa-sdk');

// Constants
const constants = require('../constants/constants');

// const GET_PET_NAME_REPROMPT = `Tell me your dog's name by saying: My dog's name is, and then the name.`;
// const INTRO = `Welcome to DogLog, the skill that lets you record information
// about your pup's day activity.  Track events like feeding times, bathroom breaks,
// accidents, or naps. But first, let's get your pet's name. ${GET_PET_NAME_REPROMPT}`;


// Onboarding Handlers
var onboardingStateHandlers = Alexa.CreateStateHandler(constants.states.ONBOARDING, {

  'NewSession': function() {
    // var petName = this.attributes['petName'];
    // if (petName) {
    //
    //   // Change state to Main
    //   this.handler.state = constants.states.MAIN;
    //   this.emitWithState('LaunchRequest');
    //
    //   // Welcome back the user
    //   // this.emit(':ask', `Welcome back! Let's record some more data about ${petName}. ` +  GET_INTENT_REPROMPT, GET_INTENT_REPROMPT);
    // }
    // this.emit(':ask', INTRO, GET_PET_NAME_REPROMPT);
  },

  'NameCapture': function() {
    // var petNameSlot = this.event.request.intent.slots.PetName.value;
    //
    // var petName;
    // if (petNameSlot) {
    //   petName = petNameSlot;
    // }
    //
    // if (petName) {
    //   this.attributes['petName'] = petName;
    //   this.emit(':tell', `Ok, great! We've noted that your pet's name is: ${petName}.`);
    // }
  },

  'PetEventCapture': function() {
    // var petEventSlot = this.event.request.intent.slots.PetEvent.value;
    //
    // var petEvent;
    // if (petEventSlot) {
    //   petEvent = petEventSlot;
    // }
    // if (petEvent) {
    //   this.attributes['petEvent'] = petEvent;
    //
    //   // Change state to main
    //   this.handler.state = constants.states.MAIN;
    //
    //   this.emit(':tell', `Ok, great! We've recorded your dog's ${petEvent} event in our database.`);
    // }

  },

  'AMAZON.StopIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', 'Goodbye!');
  },

  'AMAZON.CancelIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', 'Goodbye!');
  },

  'SessionEndedRequest': function () {
    // Force State to Save when the user times out
    this.emit(':saveState', true);
  },

  'AMAZON.HelpIntent': function () {
    // let petName = this.attributes['petName'];
    //
    // if (petName) {
    //   this.emit(':ask', GET_PET_NAME_REPROMPT, GET_PET_NAME_REPROMPT);
    // }
  },

  'Unhandled': function () {
    // this.emitWithState('AMAZON.HelpIntent');
  }

});

module.exports = onboardingStateHandlers;
