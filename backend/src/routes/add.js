const userModel = require('../schema/UserSchema');

async function userAddHandler(req, res)
{
    const user = await userModel.find({ username: req.body.username });
    if (user.length !== 0)
        return res.status(200).json({'message': 'user_exists'});

    userModel.create({
        username: req.body.username,
        date: Date.now(),
    }).then(result => {
        res.status(200).json({'message': 'used_created'});
    });
}

module.exports = userAddHandler;