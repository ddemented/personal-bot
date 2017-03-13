var Request = require('request')

var config = require('./config')

module.exports = function (controller) {
  // subscribe to page events
  Request.post('https://graph.facebook.com/me/subscribed_apps?access_token=' + config.FB_PAGE_ACCESS_TOKEN,
    function (err, res, body) {
      if (err) {
        controller.log('Could not subscribe to page messages')
      }
      else {
        controller.log('Successfully subscribed to Facebook events:', body)
        console.log('Botkit can now receive messages')

        // start ticking to send conversation messages
        controller.startTicking()
      }
    })
}
