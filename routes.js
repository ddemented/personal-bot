var facebook_handler = require('./bot').handler

module.exports = function(app) {
  // Index route
  app.get('/', function (req, res) {
      res.send("working")
  })

  // for Facebook verification and basic setup
  app.get('/webhook/', function (req, res) {
      if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === 'yolo') {
          res.send(req.query['hub.challenge'])
      }
      res.send('Error, wrong token')
  })

  //For a api endpoint
  app.post('/webhook/', function (req, res) {
      facebook_handler(req.body)

      res.sendStatus(200)
  })
}
