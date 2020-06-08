import Sequelize, { Model } from "sequelize";

class tb_colecao extends Model {
    static init(sequelize) {
        super.init(
            {
                id_colecao: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_nomecol: Sequelize.STRING,
                dt_colecao: Sequelize.DATE
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_colecao;