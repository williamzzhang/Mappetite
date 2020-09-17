const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apikey = '1WVMnF3lYWSrE6yRga7rzbkNe'
const apiSecretKey = 'L4TRmfUiG8ThoFD3BFbXhRV9moPVt3gulfyNSNJ3CSMfK9Hy4V'
const accessToken = '1592490056-XxjcMF1Lk1E9cRdWEPsexNOQbzTBk4HirSVo2mX'
const accessTokenSecret = 'LJ8hhe5TaGl51fYAu69Vsk72koiM8Fao6nPHKaS9WRRqU'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

  //EFFECTS: Retrieves recent tweets about Vancouver food, restaurants, recipes, etc. in text form
  T.get('search/tweets', { q: '#food, #vancouver since:2020-09-01', count: 100 }, function(err, data, response) {
    const tweets = data.statuses
    .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) // Marks tweets with language indicator for easier navigation
    .filter(tweet => tweet.toLowerCase().includes('')); // Optional filter to find specific keywords (foods, cuisines. etc)

    console.log(tweets);
  })


})();