var Twit = require('twitter');

var T = new Twit({
    consumer_key: '7KsJEqEC7muNdhuTZqZvBsLQG',
    consumer_secret: 'vtRxrKZMbyNCIKOKJxc69XK2EljZl0FzdbgiutHnvokLefkNvt',
    access_token_key: '935192415358668802-jiS6oQ4sFxzgLGClLUPyNNewSgMms72',
    access_token_secret: 'dki4h7sYhKzRtWqxECmeNBAcEd133u10ytPHo9v0V9d2b',

});   

let searchQuery = { 
  q: "BigRussianBoss",
  count: 5,
  lang: 'ru',
  max_id: null,
  include_entities: null
};

T.get('search/tweets', searchQuery, function(error, tweets, response){
        if (error) throw error;
        console.log(tweets);
    });

  function gotData(err, data, response) {
    var cnt=0;
    var tweets = data;
    for(var i = 0 ; i < tweets.length ; i++){
        console.log(tweets[i].text);
        cnt ++;
    }
    console.log(cnt);  
  }