// const {model, Schema} = require("mongoose");

// const PostSchema = new Schema ({
//     title:{
//         type: String,
//         required:[true, "Title is required"],
//     },
//     text:{
//         type:String,
//         required:[true, "Text is required"],
//     },
//     image:{
//         typr:String,
//         required:[true, "Image url is required"],
//     },
//     publishedDate:{
//         type:Date,
//         default:Date.now
//     },
//     owner:{
//         type:Schema.ObjectId,
//         ref:"User",
//         required:true
//     },
// });

// const PostModel = model("Post", PostSchema);
// module.exports = PostModel;