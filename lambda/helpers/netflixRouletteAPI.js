const rp = require('request-promise');
const querystring = require('querystring');
const constants = ('../constants');
module.exports = {

  GetMovieByActor: (actor) => {
    var uriEncodedActorName = querystring.escape(actor);
    console.log('actor:', uriEncodedActorName);
    return new Promise((resolve, reject) => {
      console.log('uriEncodedActorName', uriEncodedActorName);
      rp('http://netflixroulette.net/api/api.php?actor=' + uriEncodedActorName)
      .then((response) => {
        console.log('response: ', response);
        resolve(JSON.parse(response));
      })
      .catch((error) => {
        console.log('error: ', error);
        reject('NetflixRoulette API error: ', error);
      });
    });
  }
};
