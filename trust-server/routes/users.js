const express = require("express");
const router = express.Router();
const User = require("../models/User");
const upload = require("../config/cloudinary");

//http://localhost:4000/api/users
router.get("/", (req, res, next) => {
  // to get all the users
  User.find()
    .then((userDocuments) => {
      res.status(200).json(userDocuments);
    })
    .catch((err) => {
      next(err);
    });
});

//http://localhost:4000/api/users/{some-id}
router.get("/:id", (req, res, next) => {
  // to get on user
  User.findById(req.params.id)
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((err) => {
      next(err);
    });
});

//http://localhost:4000/api/users/{some-id}
router.patch("/:id", (req, res, next) => {
  // to update a specific user
  User.findByIdAndUpdate(req.params.id, red.body)
    .then((userDocuments) => {
      res.status(200).json(userDocuments);
    })
    .catch((err) => {
      next(err);
    });
});

//http://localhost:4000/api/users/{some-id}
router.delete("/:id", (req, res, next) => {
  // to delete a specific user
  User.findByIdAndDelete(req.params.id)
    .then((userDocuments) => {
      res.status(204).json({ message: "user deleted" });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
