//Define model
const User = require('../models/user.model');

module.exports.index = async function(req, res) {
    let users = await User.find();
    res.json(users);
}