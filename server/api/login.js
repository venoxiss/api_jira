var express = require('express');
var router = express.Router();

var User = require('./User/User.model');
var crypto = require('crypto');

router.post('/', function(req, res) {
  if (req.body.name && req.body.password) {


    const secret =  '123abc';
    const hash = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex');

    //First find all user
    User.find(function (err, Users) {
      if (err) {
        return handleError(res, err);
      }

      //if no erro check if req params are ok
      for (var index in Users){

        //if ok send status 200
        if(Users[index].name === req.body.name && Users[index].password === hash){
            res.status(200).json({ 'status' : 'ok' });
            return ;
        }

      }
      res.status(404).json({ 'status' : 'NOT FOUND'});
    });

  } else {
    res.status(400).json({ 'status' : 'missing parameters'});
  }
});

module.exports = router;
