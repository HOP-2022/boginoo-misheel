const User = require('../models/user');


exports.createUser = async (req, res, next) => {
    console.log(req.body)
    const newUser = await User.create(req.body);

    res.status(200).json({
        success: true,
        user: newUser,
    })
}

exports.getUsers = async (req, res, next) => {
    const Users = await User.find();

    res.status(200).json({
        success: true,
        users: Users,
    })
}

exports.getUser = async (req, res, next) => {
    const oldUser = await User.findById(req.params.id);

    res.status(200).json({
        success: true,
        user: oldUser,
    })
}

exports.deleteUser = async (req, res, next) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        user: deleteUser,
    })
}

exports.updateUser = async (req, res, next) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, {...req.body});

    res.status(200).json({
        success: true,
        user: updateUser,
    })
}