const jwt = require("jsonwebtoken");
const SECRET_KEY = 'itssecretkey';

module.exports.auth = (req, res, next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(' ')[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.userId = user.indexOf;
            // req.name = user.name;
            next();
        }else{
            res.status(401).json({message:"handah erhgui hereglegch baina !!!"})
        }
    }catch(error){
        console.log(error);
        res.status(401).json({message:"handah erhgui hereglegch baina !!!"})
    }
}