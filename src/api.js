var actions = require('./actions');

var API = module.exports = {
  fetchChirps: function () {
    get('/api/chirps').then(actions.gotChirps.bind(actions))
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }
};

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      console.log('Network response was not ok.');
    }
  });
}
