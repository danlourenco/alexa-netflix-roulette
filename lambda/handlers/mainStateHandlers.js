var Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');


// Constants
const constants = require('../constants/constants');



// Main State Handlers
var mainStateHandlers = Alexa.CreateStateHandler(constants.states.MAIN, {

  'LaunchRequest': function () {
    // var petName = this.attributes['petName'];
    // if (petName) {
    //   this.emit(':ask', `Welcome back! Let's record some more data about ${petName}. ` +  GET_INTENT_REPROMPT, GET_INTENT_REPROMPT);
    // } else {
    //   this.handler.state = constants.states.ONBOARDING;
    //   this.emitWithState('NewSession');
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
    //   this.emit(':tell', `Ok, great! We've recorded your dog's ${petEvent} event in our database.`);
    //
    //
    //   var updateParams = {
    //     TableName: constants.dynamoDBEventTableName,
    //     Item: {
    //       userId: this.event.session.user.userId,
    //       date: DateHelpers.getCurrentTime(),
    //       petName: this.attributes['petName'],
    //       petEvent: petEvent
    //     }
    //   };
    //
    //   docClient.put(updateParams, function(err, data) {
    //     if(err) {
    //       console.log('Oh no! There was an error. Here it is: ', err);
    //     } else {
    //       console.log('Success: ', data);
    //     }
    //   });
    // }
  },

  'GetLastEvent': function () {
    // let scanParams = {
    //   TableName: constants.dynamoDBEventTableName,
    //   Limit: 1
    // };
    //
    // const self = this;
    // docClient.scan(scanParams, function(err, data) {
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     let UTCdate = moment(data.Items[0].date);
    //     let convertedDate = UTCdate.clone().tz('America/Los_Angeles');
    //     let speakableDate = convertedDate.calendar();
    //     self.emit(':tell', `Your pet's last recorded event was a ${data.Items[0].petEvent}, ${speakableDate}.`);
    //   }
    // });

  },

  'GetDailySummary': function () {
    // var queryParams = {
    //   TableName: constants.dynamoDBEventTableName,
    //   Key: {
    //     userId: this.event.session.user.userId
    //   }
    // };
    // console.log('userId: ', queryParams.Key.userId);
    // const self = this;
    // docClient.get(queryParams, function(err, data) {
    //   if (err) {
    //     console.error(err);
    //     self.emit(':tell', 'shit, there has been an error');
    //   } else {
    //     console.log(data);
    //     self.emit(':tell', 'looks like it worked');
    //   }
    // });
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
    // this.emit(':ask', GET_INTENT_REPROMPT, GET_INTENT_REPROMPT);
  },

  'Unhandled': function () {
    this.emitWithState('AMAZON.HelpIntent');
  }
});

module.exports = mainStateHandlers;
