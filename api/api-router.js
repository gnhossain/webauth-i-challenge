const router = require('express').Router();
const bcrypt = require('bcrypt')
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/user-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post("/hash", (req,res) => {
  const {username, password } = req.body;
  
})

module.exports = router;