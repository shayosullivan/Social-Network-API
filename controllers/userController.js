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
                res.status(404).json({ message: "No user found with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No user found with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removeUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }
        )
        .then((data) => {
            if(data) {
                return Thought.deleteMany(
                    { username : data.username }
                );
            }
            else {
                res.status(404).json({ message: "No user found with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
}

module.exports = userController;