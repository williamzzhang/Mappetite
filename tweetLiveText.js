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

  //2. REAL TIME MONITORING USING STREAM (HASHTAG)
  var stream = T.stream('statuses/filter', { track: '#recipe' })
  stream.on('tweet', function (tweet) {
      console.log(tweet.text);
      console.log('Language: ' + franc(tweet.text));
      console.log('------');
  })

})();