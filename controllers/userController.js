const db = require("../models");

module.exports = {
  update: function(req, res) {
    console.log("models hit");
    console.log(req.body, req.user);
    db.User.findByIdAndUpdate(
      req.user._id,
      {
        $push: {
          savedHikes: req.body.id
        }
      },
      { new: true }
    ).then(dbHike => {
      res.json(dbHike);
    });
  }
};
