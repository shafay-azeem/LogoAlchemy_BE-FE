const express = require("express");
const {} = require("../controllers/Purchase");
const {
  sendEmailFromServer,
  contactInfoMail,
} = require("../controllers/EmailController");
const router = express.Router();

router.route("/sendEmailFromServer").get(sendEmailFromServer);
router.route("/contactInfoMail").post(contactInfoMail);

module.exports = router;
