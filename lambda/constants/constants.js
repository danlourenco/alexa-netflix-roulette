const constants = {
  appId: 'amzn1.ask.skill.29a8021a-bd76-440a-b3bb-b3201bef7ac8',

  dynamoDBTableName: 'DogLogUsers',
  dynamoDBEventTableName: 'DogLogEvents',
  // Skill States
  states: {
    ONBOARDING: '',
    MAIN: '_MAIN'
  },
  phrases: {
    RECORD_PET_EVENT_PROMPT: `What would you like to do? You can say: <w role="ivona:VB">record</w> pee, <w role="ivona:VB">record</w> poop,
    <w role="ivona:VB">record</w> nap, or <w role="ivona:VB">record</w> meal.`
  }
};

module.exports = constants;
