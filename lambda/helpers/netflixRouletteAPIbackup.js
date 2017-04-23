const rp = require('request-promise');
// const constants = ('../constants');
module.exports = {
  GetMovieByActor: (actor) => {
    return new Promise((resolve, reject) => {
      rp('http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage')
      .then((response) => {
        resolve(JSON.parse(response));
      })
      .catch((error) => {
        reject('NetflixRoulette API error: ', error);
      });
    });
  }
};
