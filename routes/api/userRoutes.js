const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(addUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;