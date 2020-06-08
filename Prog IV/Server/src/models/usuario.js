import Sequelize, { Model } from "sequelize";

class tb_usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                id_usuario: {
                   type: Sequelize.INTEGER,
                   primaryKey: true
                },
                tx_login: Sequelize.STRING,
                tx_senha: Sequelize.STRING
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_usuario;