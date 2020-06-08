import Sequelize, { Model } from "sequelize";

class tb_status extends Model {
    static init(sequelize) {
        super.init(
            {
                id_status: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_status: Sequelize.STRING,
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_status;