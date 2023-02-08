const userModel = require('../schema/UserSchema');

async function userListHandler(req, res)
{
    let result = [];
    for await (const user of userModel.find())
        result.push(user);
    res.json(result);
}

module.exports = userListHandler;