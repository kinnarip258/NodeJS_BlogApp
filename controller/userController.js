const User = require('../models/user');

const user_create_post = (req,res) => {
    const user = new User(req.body)

    console.log(user);
    user.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        });
}


module.exports = {user_create_post};