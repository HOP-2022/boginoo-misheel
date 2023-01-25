// const Post = require ("./models/post")

// module.exports.getPostsByPopulateWithUser = async (req, res, next) => {
//     try{
//         const posts = await Post.findById(req.body.postId).populate("owner");
//         console.log(posts);
//         res.status(200).json({
//             message:true,
//             data:posts,
//         });
//     } catch (error) {
//         return res.status(400).json ({message:error, data:null});
//     }
// };