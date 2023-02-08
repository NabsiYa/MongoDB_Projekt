const userModel = require('../schema/UserSchema');

async function userUpdateHandler(req, res)
{
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