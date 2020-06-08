import Sequelize, { Model } from "sequelize";

class tb_categoria extends Model {
    static init(sequelize) {
        super.init(
            {
                id_categoria: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_categoria: Sequelize.STRING
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_categoria;
