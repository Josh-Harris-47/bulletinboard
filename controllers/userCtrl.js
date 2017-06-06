var Messages = require('./../models/userModel.js');

module.exports = {
  read: function(req,res){
    Messages.findAll()
    .then(function(result,err){
      if(err){
        res.send(err)
      } else {
        res.send(result)
      };
    });
  },
  create: function(req,res){
    Messages.create(req.body)
    .then(function(result,err){
      if(err){
        res.send(err)
      } else {
        res.send(result);
      }
    });
  },
  update: function(req,res){
    Messages.findOne({
      where: {id: req.params.id}
    }).then(function(candy){
      candy.update(req.body)
      .then(function(result,err){
        if(err){
          res.send(err)
        } else {
          res.send(result);
        }
      });
    });
  },
  destroy: function(req,res){
    Messages.destroy({
      where: {id: req.params.id}
    }).then(function(result,err){
      if(err){
      res.send(err)
      } else {
      res.send(req.params.id+" was successfully deleted.");
      }
    });
  }
}