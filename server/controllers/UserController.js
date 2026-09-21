const UserController = {
    login :(req,res)=>{
        const {email,password}= req.body;
        
        return res.send('hit login')
    },
    register:(req,res)=>{
        const {name,email,password}= req.body;
        
        return res.send('hit register')
    }
}
module.exports = UserController;