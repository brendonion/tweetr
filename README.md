## Goal

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3 to help web bootcamp students get comfortable with their front-end chops with those technologies.

The server is built with Node, Express and Mongo and allows users to request and submit tweets via a JSON end-point. The server/express code should not require any change from the student.

Students must work with and implement the HTML, CSS and client-side JS to bring this project to life, turning it...

#### From this (initial state):

!["Tweeter - Initial state"](http://d.pr/i/12hNI/4PMJqFdx+)

#### To this (final state):

!["End Result - Tweeter"](https://d.pr/i/1eyEY/4MEH16BY+)

## Functional Requirements

*   Single page app architecture.
*   Use ajax to communicate w/ Tweeter backend server
*   Tweets should be persisted to MongoDB and survive server restart

Page Contains:

*   Navbar

    *   fixed to top
    *   Padding on both sides
    *   Should look similar if not identical to image/gif provided
    *   contains Compose button, which:

        *   Toggles display of inline compose box (animation required)
        *   Auto-focuses the textarea in the compose box

*   Tweet compose box

    *   Contains form to submit tweet, above the tweets
    *   Form contains:

        *   tweet textarea
        *   tweet submit button (left aligned)
        *   character counter (right aligned)
    *   validates input on submit

        *   Indicates input errors (alerts are okay)
    *   Character counter updates on keypress

        *   Turn red (or similar) when count > 140 chars
    *   Does not submit (alert feedback) if empty or count > 140

        *   should be smart enough to catch empty spaces ("  ") as text [minor]
    *   refreshes tweet list when successfully submitted

*   List of tweets

    *   Order by post time descending (reverse chronological)
    *   Each tweet:

        *   Must look like the tweet [major]
        *   Should have semantic HTML tags (`article`, etc) [minor]
        *   Contains:
        *   user avatar
        *   user name
        *   user handle
        *   tweet text

            *   not required to handle carriage return / new line

## Stack Requirements

*   _ES6_ (Simple, client side JS)
*   _jQuery_ (Ajax)
*   _CSS3_ (rounded corners, transitions, etc.)
*   _Semantic HTML5_ tags (`section`, `article`, etc)
*   _git_ for version control
*   _mongodb_ for persistance



