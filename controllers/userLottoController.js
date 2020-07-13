const router = require("express").Router();
const Lottery = require("../db").import("../models/userLotto");

router.get("/", (req, res) => {
  console.log("USER", req.user);
  Lottery.findAll({
    where: {
      owner_id: req.user.id,
    },
  })
    .then((lotteries) =>
      res.status(200).json({
        lotteries: lotteries,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});
//heroku push
//post
router.post("/", (req, res) => {
  const lotteryFromRequest = {
    lottoNum: req.body.lottoNum,
    nameOfLotto: req.body.nameOfLotto,
    lottoPot: req.body.lottoPot,
    location: req.body.location,
    owner_id: req.user.id,
    userId: req.user.id,
  };
  Lottery.create(lotteryFromRequest)
    .then((lottery) =>
      res.status(200).json({
        lottery: lottery,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

//get by id
router.get("/:id", (req, res) => {
  Lottery.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((lottery) =>
      res.status(200).json({
        lottery: lottery,
      })
    )
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

//update
router.put("/:id", (req, res) => {
  Lottery.update(req.body.lottery, {
    where: {
      id: req.params.id,
    },
  })
    .then((lottery) =>
      res.status(200).json({
        lottery: lottery,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

//delete
router.delete("/:id", (req, res) => {
  Lottery.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((lottery) =>
      res.status(200).json({
        lottery: lottery,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

module.exports = router;
