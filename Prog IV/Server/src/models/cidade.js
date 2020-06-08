import Sequelize, { Model } from "sequelize";

class tb_cidade extends Model {
    static init(sequelize) {
        super.init(
            {
                id_cidade: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_nomecid: Sequelize.STRING,
                id_estado: Sequelize.INTEGER
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }

    static associate(models) {
        this.belongsTo(models.estado, { foreignKey: "fk_estado_id", as: "fk_estado" });
      }
}

export default tb_cidade;