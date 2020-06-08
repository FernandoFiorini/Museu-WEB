import Sequelize, { Model } from "sequelize";

class tb_estado extends Model {
    static init(sequelize) {
        super.init(
            {
                id_estado: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_estado: Sequelize.STRING,
                tx_sigla: Sequelize.STRING
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_estado;