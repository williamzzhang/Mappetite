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

  //EFFECTS: sends a live notification whenever a tweet from Vancouver is sent out
  var vancouver = [ '-122.75', '36.8', '-121.75', '37.8' ]
  var stream = T.stream('statuses/filter', { locations: vancouver })
  
  //EFFECTS: display notification for each received tweet that follows filter
  stream.on('tweet', function (tweet) {
    console.log(tweet.text);
    let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

    notifier.notify({
      title: tweet.user.name,
      message: tweet.text
    });

    notifier.on('click', async function(notifierObject, options, event) {
      console.log('clicked');
      await open(url);
    });
  })
})();