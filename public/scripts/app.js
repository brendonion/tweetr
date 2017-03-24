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

var tweets = [];


function createTweetElement(tweetData){

  const name = tweetData.user.name;
  const avatar = tweetData.user.avatars.small;
  const handle = tweetData.user.handle;
  const content = tweetData.content.text;
  const time = tweetData.created_at;

  let $tweet = $('<article>').addClass('tweets')
    .append($('<header>')
      .append($('<img>').attr('src', avatar))
      .append($('<h2>').text(name))
      .append($('<h5>').text(handle))
    )
    .append($('<div>').addClass('tweet-body')
      .append($('<p>').text(content))
    )
    .append($('<footer>')
      .append($('<span>').text(new Date(time).toLocaleString()))
      .append($('<div>').addClass('icons')
        .append($('<i>').addClass('fa fa-flag').attr('aria-hidden', 'true'))
        .append($('<i>').addClass('fa fa-retweet').attr('aria-hidden', 'true'))
        .append($('<i>').addClass('fa fa-heart').attr('aria-hidden', 'true'))
        )
      );
    return $tweet;
  }


function renderTweets(tweets) {
  tweets.forEach(function(tweet){
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  })
}


$(document).ready(function() {

  $('.new-tweet form').on('submit', function(event){

    event.preventDefault();

    let contents = $('.new-tweet form textarea');
    let input = contents.val();
    let errorMessage = $('.new-tweet h4');

    if (input.length == 0){
      errorMessage.html('Too short!');
    } else if (input.length > 140) {
      errorMessage.html('Too long!');
    } else if (input == ' '){
      errorMessage.html('No blank spaces allowed!');
    } else {
      errorMessage.html('');
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: {
          text: input
        }
      }).done(function(tweet){
        let newTweet = createTweetElement(tweet);
        $('#tweets-container').prepend(newTweet);
      });
      contents.val('');
    }
  });

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).success(function(tweets){
      renderTweets(tweets);
    })
  }

  loadTweets();

  $('.compose-button').on('click', function(event){
    if ($('.new-tweet:first').is(':hidden')){
      $('.new-tweet').slideDown('fast');
      $('.new-tweet form textarea').focus();
    } else {
      $('.new-tweet').slideUp('fast');
    }
  });

});

