const jwt = require("jsonwebtoken");
const User = require("../models/user");
const SECRET_KEY = 'itssecretkey';

exports.signup = async (req, res, next) => {
    try {
        const {password, email} = req.body;
        const existingUser = await User.findOne ({ email:email});
        if(existingUser) { 
            return res.status(409).json({message:"butgeltei hereglegch baina"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await User.create({
            email:email,
            password:hashedPassword
        });
        const token = jwt.sign({email:result.email, id: result._id}, SECRET_KEY);
        res.status(201).json({user:result, token:"bearer "+token});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"ymar negenzuil buruu baina"});
    }
}

exports. login = async(req, res, next) => {
    try{
        const {email, password} = req.body;
        const existingUser = await User.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({message:"email esvel nuuts ud buruu baina"});
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(404).json({message:"email esvel nuuts ug buruu baina"});
        }
        const token = jwt.sign({email:result.email, id:result._id}, SECRET_KEY);
        res.status(201).json({user:existingUser, token: token});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"ymar negen zuil buruu baina"});
    }
};