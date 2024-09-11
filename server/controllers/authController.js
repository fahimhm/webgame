const User = require('../models/User')
const { hashPassword, comparePassword } = require('../helpers/auth')


const test = (req, res) => {
  res.json('test is working')
}

const registerUser = async (req, res) => {
  try {
    const { email, username, password, confirmPassword } = req.body;
    // check if username was entered
    if(!username) {
      return res.json({ error: 'Username is required' })
    }

    // check if email was entered
    if(!email) {
      return res.json({ error: 'Email is required' })
    }

    // check if password is good
    if(!password || password.length < 6) {
      return res.json({ error: 'Password is required and should be 6 characters long' })
    }

    // check if password and confirmPassword match
    if(password !== confirmPassword) {
      return res.json({ error: 'Passwords do not match' })
    }

    // check email is already exists or not
    const exist = await User.findOne({email});
    if(exist) {
      return res.json({ error: 'Email already exists' })
    }

    const hashedPassword = await hashPassword(password)
    // create user in database
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    return res.json(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  test,
  registerUser
}