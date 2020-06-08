import Sequelize, { Model } from "sequelize";

class tb_manutencao extends Model {
    static init(sequelize) {
        super.init(
            {
                id_manutencao: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                dt_inicio: Sequelize.DATE,
                dt_fim: Sequelize.DATE,
                id_objeto: Sequelize.INTEGER
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
}

export default tb_manutencao;