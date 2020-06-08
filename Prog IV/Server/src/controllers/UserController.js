import User from "../models/usuario";

class UserController {
    async index(req, res) {

        const login = req.body.login; 
        const senha = req.body.senha;

        if(login == null || senha == null){
            return res.status(400).json({ error: "Informe login e senha" });
        }

        const userExists = await User.findOne({
            where: {
              tx_login: login,
              tx_senha: senha
            }
         });

        return res.json(
            userExists ? true : false
        );
    }
}

export default new UserController();