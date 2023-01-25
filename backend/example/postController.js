// const jwt = require("jsonwebtoken");
// const { result } = require("lodash");
// const User = require("../models/user");
// const PostModel = require("../schema");
// const SECRET_KEY = 'itssecretkey';

// exports.createPost = async (req, res, next) =>{
//     if(!req.body?.text ||!req.body?.image || !req.body?.title){
//         res.status(400)
//         .json({message:`text, image or userId are required.`});
//     }
//     try {
//         const owner = res.locals.userId 
//         const createdPost = await PostModel.create({...req.body, owner});
//         res
//         .status(201)
//         .json({message:`New post is created.`, data: createdPost });
//     }catch(error) {
//         return res.status(400).json({messgae:error})
//     }
// };