const User = require('./users.model');


exports.createUser = async (req, res) => {
  try 
  {
    const user = new User(req.body);
    const savedUser = await user.save();
    const token = await user.generateAuthToken(user._id)
    res
      .status(200)
      .send({user: savedUser, token: token, message: 'User crated in database'});
  }
  catch (error)
  {
    res.status(500).send(error)
  }
}

exports.findUser = async (req, res) => {
  try 
  {
    const user = req.params.username;
    const pass = req.body.password;
    const targetUser = await User.findOne({
      username: user,
      password: pass,
    });
    const token = await targetUser.generateAuthToken(targetUser._id)
    res
      .status(200)
      .send({user: targetUser, token: token, message: "User succesfully found in database" });
  }
  catch (error)
  {
    res.status(500).send(error)
  }
};


exports.deleteUser = async (req, res) => {
  try 
  {
    const user = req.params.username;
    const deleteUser = await User.findOneAndDelete({username: user});
    res
      .status(200)
      .send({user: deleteUser, message: 'User deleted'});
  }
  catch (error)
  {
    res.status(500).send(error)
  }
}

exports.authUser = async (req, res) => {
  res.status(200).send(req.user)
}