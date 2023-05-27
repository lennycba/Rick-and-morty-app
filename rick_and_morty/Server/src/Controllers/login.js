const {User} = require('../DB_connection');

const login = async (req,res) =>{
    try {
        const {email,password} = req.query;
        if(!email)return res.status(401).json({error: 'Fallo login por email'});
        
        if(!password)return res.status(401).json({error: 'Fallo login por password'})
    
        const usuario = await User.findOne({
            where: {email}
        });
        if(!usuario) return res.status(404).json({error: 'Usuario no encontrado'});
    
        usuario.password === password ? res.status(200).json({access:true}): res.status(403).json({error: 'Contraseña incorrecta' })
        return {access:true}
    } catch (error) {
        res.status(500).send({error:'corneta'});
    }
}



module.exports = login;