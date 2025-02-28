const router = require('express').Router();
const bcrypt = require('bcrypt') //npm i bcryptjs
const Users = require('../users/user-model.js');

router.post('/register', (req, res) => {
  let user = req.body;

  let hash = bcrypt.hashSync(user.password, 12)
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        req.session.loggedIn = true; 
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json('testing');
    });
});

router.get('/logout', (req,res) => {
  if( req.session){
    req.session.destroy();
    res.status(200).json({ message:"logged out successfully"})
    }
})

module.exports = router;
