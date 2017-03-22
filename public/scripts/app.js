var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


function createTweetElement(tweetData){
    let name = tweetData.user.name;
    let avatar = tweetData.user.avatars.regular;
    let handle = tweetData.user.handle;
    let content = tweetData.user.content;
    let time = tweetData.user.created_at;

    let headerName = $("header h2").append(name);
    console.log(headerName);
}





var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
//$('#tweets-container').append($tweet); // to add it to the page so we can make sure
                                       //it's got all the right elements, classes, etc.

