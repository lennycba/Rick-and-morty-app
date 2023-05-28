const {User} = require('../DB_connection');

const postUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || email.length < 1) res.status(500).json({error:'Falta email'});
        if(!password || password.length < 1) res.status(500).json({error:'Falta password'});
            const [user,created] = await User.findOrCreate({
            where: {email, password}
            
        });
        if(created=== true) return res.status(201).send({message:'usuario creado correctamente'});
        if(created === false) res.status(200).send({message:'este email ya existe'});
    }   
     catch (error) {
        res.status(500).json({error:error.message});
    }
}






module.exports=postUser;