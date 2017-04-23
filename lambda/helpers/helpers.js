const helpers = {
  cleanMalformedMessage: function(msg) {
    let malformedMessage = msg;
    let startingIndex = malformedMessage.indexOf('Sorry!');
    let endingIndex   = malformedMessage.lastIndexOf('!');

    return malformedMessage.substring(startingIndex, endingIndex);
  }
};


module.exports = helpers;
