const router = require("express").Router();
const db = require("../../models");
const jwt = require("jwt-simple");
const config = require("../../config");
const passport = require("passport");
const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });
const axios = require("axios");

const hikesController = require("../../controllers/userController");

function tokenizer(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.secret
  );
}

router.get("/", function(req, res) {
  res.send("Welcome to the v1 routes!");
});

router.get("/protected", requireAuth, function(req, res) {
  // res.send("You have been protected!");
  res.json(req.user);
});

router.post("/signin", requireSignin, function(req, res) {
  res.json({
    token: tokenizer(req.user),
    reqSignIn: requireSignin
  });
});

router.put("/saveHike", requireAuth, hikesController.update);

router.delete("/removeHike/:id", requireAuth, function(req, res) {
  console.log(req.params.id);
  console.log(req.user);
  db.User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $pull: { savedHikes: parseInt(req.params.id) }
    },
    { safe: true, upsert: true }
  )
    .then(result => console.log("RESULT", result))
    .catch(err => console.log("ERROR", err));
  res.send("Delete route hit");
});

router.get("/savedHikes", requireAuth, function(req, res) {
  // We are going to have a req.user
  // Since we have a user we can go ahead and query for their likes
  db.User.findById(req.user._id).then(dbUser => {
    const trailIds = dbUser.savedHikes;
    if (trailIds.length === 0) {
      res.json({ trails: [] });
    } else {
      const url = `https://www.hikingproject.com/data/get-trails-by-id?ids=${trailIds.join(
        ","
      )}&key=200394657-1ebddf3d823768d96c230dd00cd31c30`;

      axios
        .get(url)
        .then(response => {
          res.json({ trails: response.data.trails });
        })
        .catch(err => {
          res.send({ err }); // <= send error
        });
    }
  });
});

router.post("/signup", function(req, res) {
  //res.send("You signed up!!!");
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({ email, password, firstName, lastName });
      // save the user
      user.save().then(user => {
        console.log(user);
        // respond with the success if the user existed
        res.json({ token: tokenizer(user) });
      });
    })
    .catch(err => {
      return next(err);
    });
});

module.exports = router;
