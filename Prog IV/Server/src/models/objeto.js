import Sequelize, { Model } from "sequelize";

class tb_objeto extends Model {
    static init(sequelize) {
        super.init(
            {
                id_objeto: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement: true,
                },
                tx_nomeobj: Sequelize.STRING,
                id_categoria: Sequelize.INTEGER,
                id_colecao: Sequelize.INTEGER,
                id_midia: Sequelize.INTEGER,
                id_status: Sequelize.INTEGER,
                id_secao: Sequelize.INTEGER,

            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
    static associate(models) {
        this.belongsTo(models.categoria, { foreignKey: "categoriaobjeto_fk", as: "categoriaobjeto" });
        this.belongsTo(models.colecao, { foreignKey: "colecaoobjeto_fk", as: "colecaoobjeto" });
        this.belongsTo(models.midia, { foreignKey: "midiaobjeto_fk", as: "midiaobjeto" });
        this.belongsTo(models.status, { foreignKey: "secaoobjeto_fk", as: "secaoobjeto" });
        this.belongsTo(models.secao, { foreignKey: "statusobjeto_fk", as: "statusobjeto" });
      }
}


export default tb_objeto;