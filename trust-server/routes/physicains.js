const express = require("express");
const router = express.Router();
const Physicain = require("../models/Physicain");
const User = require("../models/User");
const upload = require("../config/cloudinary");

//http://localhost:4000/api/physicains
router.post("/", (req, res, next) => {
  // to post a physicain
  const physician = { ...req.body };
  physician.userId = req.session.currentUser;
  Physicain.create(physicain)
    .then((physicainDocuments) => {
      res.status(200).json(physicainDocuments);
    })
    .catch(next);
});

//http://localhost:4000/api/physicains
router.get("/:id", (req, res, next) => {
  // to get all the physicains per user
  Physicain.find({ userId: req.params.id })
    .populate("userId", "-email", "-password", "-phone")
    .then((physicainDocuments) => {
      res.status(200).json(physicainDocuments);
    })
    .catch(next);
});

//http://localhost:4000/api/physicains/{some-id}
router.get("/:id", (req, res, next) => {
  // to get one physicain
  Physicain.findById({ userId: req.params.id })
    .populate("userId", "-email", "-password", "-phone")
    .then((physicainDocument) => {
      res.status(200).json(physicainDocument);
    })
    .catch(next);
});

//http://localhost:4000/api/physicains/{some-id}
router.patch("/:id", (req, res, next) => {
  // to update a specific physicain
  Physicain.findByIdAndUpdate({ userId: req.params.id }, red.body, {
    new: true,
  })
    .populate("userId", "-email", "-password", "-phone")
    .then((physicainDocuments) => {
      res.status(200).json(physicainDocuments);
    })
    .catch(next);
});

//http://localhost:4000/api/physicains/{some-id}
// router.delete("/:id", (req, res, next) => {
//   // to delete a specific physicain
//   User.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.sendStatus(204);
//     })
//    .catch(next);
// });

module.exports = router;
