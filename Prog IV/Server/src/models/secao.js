import Sequelize, { Model } from "sequelize";

class tb_secao extends Model {
    static init(sequelize) {
        super.init(
            {
                id_secao: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_descsecao: Sequelize.STRING,
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_secao;