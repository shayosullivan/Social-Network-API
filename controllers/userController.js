const {User, Thought} = require("../models");

const userController = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    
}

module.exports = userController;