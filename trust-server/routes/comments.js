const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments");
const User = require("../models/User");

//http://localhost:4000/api/comments
router.post("/", (req, res, next) => {
  // to post a comment
  const comment = { ...req.body };
  comment.userId = req.session.currentUser;
  Comments.create(comment)
    .then((commentDocument) => {
      res.status(200).json(commentDocument);
    })
    .catch(next);
});

//http://localhost:4000/api/comments/{some-id}
router.get("/:id", (req, res, next) => {
  // to get all the comments per physicain
  Comments.find({ physicainId: req.params.id })
    .populate("userId", "-email", "-password", "-phone")
    .then((commentDocuments) => {
      res.status(200).json(commentDocuments);
    })
    .catch(next);
});

//http://localhost:4000/api/comments/{some-id}
// router.delete("/:id", (req, res, next) => {
//   // to delete a specific comment
//   User.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.sendStatus(204);
//     })
//     .catch(next);
// });
