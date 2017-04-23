const rp = require('request-promise');
const querystring = require('querystring');
const constants = ('../constants');
module.exports = {
  // TODO: parameterize actor
  GetMovieByActor: (actor) => {
    var uriEncodedActorName = querystring.escape(actor);
    console.log('actor:', uriEncodedActorName);
    return new Promise((resolve, reject) => {

      rp(`${constants.baseUrl}actor=${uriEncodedActorName}`)
      .then((response) => {
        resolve(JSON.parse(response));
      })
      .catch((error) => {
        reject('NetflixRoulette API error: ', error);
      });
    });
  }
};
