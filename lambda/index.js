/*eslint quotes: ["error", "single", { "allowTemplateLiterals": true }]*/

const Alexa = require('alexa-sdk');
const constants = require('./constants/constants');

// Handlers
var onboardingStateHandlers = require('./handlers/onboardingStateHandlers');
var mainStateHandlers = require('./handlers/mainStateHandlers');

/* eslint-disable */
exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);

  alexa.appId = constants.appId;

  alexa.dynamoDBTableName = constants.dynamoDBTableName;
  alexa.registerHandlers(
    onboardingStateHandlers,
    mainStateHandlers
  );
  alexa.execute();
};

/* eslint-enable */
