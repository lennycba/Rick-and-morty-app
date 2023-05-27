const {User} = require('../DB_connection');

const postUser = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || email.length < 1) res.status(500).json({error:'Falta email'});
    if(!password || password.length < 1) res.status(500).json({error:'Falta password'});
        await User.findOrCreate({
        where: {email, password}
    });
    res.status(200).json({message: 'Usuario creado'});
}






module.exports=postUser;