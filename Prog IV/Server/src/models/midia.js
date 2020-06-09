import Sequelize, { Model } from "sequelize";

class tb_midia extends Model {
    static init(sequelize) {
        super.init(
            {
                id_midia: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                bl_midia: Sequelize.STRING
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_midia;