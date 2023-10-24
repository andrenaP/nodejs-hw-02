const express = require("express");

const {
  validateBody,
  isValidId,
  authenticate,
  upload,
} = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
} = require("../../utils/validation/userValidation");
const contr = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerSchema), contr.register);

router.post("/login", validateBody(loginSchema), contr.login);
router.get("/current", authenticate, contr.getCurrent);
router.post("/logout", authenticate, contr.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  contr.updateAvatar
);
module.exports = router;
