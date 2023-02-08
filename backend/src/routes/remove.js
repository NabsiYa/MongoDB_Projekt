const userModel = require('../schema/UserSchema');

async function userRemoveHandler(req, res)
{
    userModel.deleteOne({
        username: req.body.username
    }).then(result => {
        res.status(200).json({'message': 'used_created'});
    });
}

module.exports = userRemoveHandler;