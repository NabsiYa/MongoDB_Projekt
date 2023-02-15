const userModel = require('../schema/UserSchema');

async function userUpdateHandler(req, res)
{
    const user = await userModel.find({ username: req.body.username });
    if (user.length !== 0)
        return res.status(200).json({'message': 'username_in_use'});
    
    userModel.updateOne({
        username: req.body.username
    },
    {
        username: req.body.new_username
    }).then(result => {
        res.status(200).json({'message': 'user_updated'});
    });
}

module.exports = userUpdateHandler;