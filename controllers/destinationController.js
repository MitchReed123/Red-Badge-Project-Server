const router = require("express").Router();
const Destinations = require("../db").import("../models/destination");

//getting all that was made
router.get("/", (req, res) => {
  Destinations.findAll({
    where: {},
  })
    .then((destinations) =>
      res.status(200).json({
        destinations: destinations,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

//posting a new destination to the DB is available to users but the Admin will have access to delete or update to fix the item or remove one that doesnt make sense
router.post("/", (req, res) => {
  const destinationFromRequest = {
    lottoLocation: req.body.lottoLocation,
    lottoAddress: req.body.lottoAddress,
    // lottoId: this.destination_id,
  };

  Destinations.create(destinationFromRequest)
    .then((destination) =>
      res.status(200).json({
        destination: destination,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

//getting them by id, im not counting this as a endpoint because im not sure if i use it but its nice to have just in case
router.get("/:id", (req, res) => {
  Destinations.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((destination) =>
      res.status(200).json({
        destination: destination,
      })
    )
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update: Just for the admin role
router.put("/:id", (req, res) => {
  Destinations.update(req.body.destination, {
    where: {
      id: req.params.id,
    },
  })
    .then((destination) =>
      res.status(200).json({
        destination: destination,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});
//delete is just for the admin role as well just like update, will make it so it only shows up on the admin panel for the page
router.delete("/:id", (req, res) => {
  Destinations.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((destination) =>
      res.status(200).json({
        destination: destination,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

module.exports = router;
