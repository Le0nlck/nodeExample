var Twit = require('twitter');

var T = new Twit({
    consumer_key: '7KsJEqEC7muNdhuTZqZvBsLQG',
    consumer_secret: 'vtRxrKZMbyNCIKOKJxc69XK2EljZl0FzdbgiutHnvokLefkNvt',
    access_token_key: '935192415358668802-jiS6oQ4sFxzgLGClLUPyNNewSgMms72',
    access_token_secret: 'dki4h7sYhKzRtWqxECmeNBAcEd133u10ytPHo9v0V9d2b',

});   

let searchQuery = { 
  q: "Навальный украл",
  count: 2,
  lang: 'ru',
  max_id: null,
  include_entities: null
};

T.get('search/tweets', searchQuery, function(error, tweets, response){
        if (error) throw error;        
        for(var i = 0; i < searchQuery.count; i++){                    
                   console.log(tweets.statuses[i].user.screen_name+ ' от ' +tweets.statuses[i].created_at + ' чирикнул в твиттере:');                   
                   console.log(tweets.statuses[i].text);
                   console.log('========================');            
            };                
    });

  