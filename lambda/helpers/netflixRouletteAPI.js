const rp = require('request-promise');
const querystring = require('querystring');
const helpers = require('./helpers');

module.exports = {

  GetMovieByActor: (actor) => {
    var uriEncodedActorName = querystring.escape(actor);
    var options = {
      uri: 'http://netflixroulette.net/api/api.php?actor=' + uriEncodedActorName,
      json: true
    };

    return new Promise((resolve, reject) => {
      rp(options)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        let message = helpers.cleanMalformedMessage(error.message);
        reject(message);
      });
    });
  },

  GetMovieByDirector: (director) => {
    var uriEncodedDirectorName = querystring.escape(director);
    var options = {
      uri: 'http://netflixroulette.net/api/api.php?director=' + uriEncodedDirectorName,
      json: true
    };
    return new Promise((resolve, reject) => {
      rp(options)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        let message = helpers.cleanMalformedMessage(error.message);
        reject(message);
      });
    });
  }
};
