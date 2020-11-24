const express = require('express')
const router = express.Router()
const { applyAuthRoutes, getTokenDecoder } = require('authenticare/server')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const {
  userExists,
  saveNewUser,
  getUserByName,
  addDetails,
  updateEmail
} = require('../db')

applyAuthRoutes(router, {
  userExists,
  createUser: saveNewUser,
  getUserByName
})

router.post('/sendRegistrationEmail', getTokenDecoder(), (req, res) => {
  if (req.user) {
    const { email } = req.body
    const msg = {
      to: email,
      from: 'coject@hotmail.com',
      subject: 'Welcome to Co-ject!',
      html: `Hello ${email}!<br>Welcome to Co-ject Events.<br>A platform for collaboration while working remotely.`
    }
    sgMail
      .send(msg)
      .then((email) => res.status(201).json(email))
      .catch(
        (err) =>
          err.message +
          ' no sendgrid API key found, please follow instructions in README'
      )
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.patch('/auth', getTokenDecoder(), (req, res) => {
  if (req.user) {
    addDetails(req.body)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err.message))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.post('/auth', getTokenDecoder(), (req, res) => {
  if (req.user) {
    getUserByName(req.user.username)
      .then((user) => {
        const userInfo = {
          id: user.id,
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          image: user.image
        }
        res.json(userInfo)
      })
      .catch((err) => res.status(500).send(err.message))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.patch('/updateEmail', getTokenDecoder(), (req, res) => {
  if (req.user) {
    updateEmail(req.body)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err.message))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

module.exports = router
