import Sequelize, { Model } from "sequelize";

class tb_instituicao extends Model {
    static init(sequelize) {
        super.init(
            {
                id_instituicao: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_nomeinst: Sequelize.STRING,
                tx_cnpj: Sequelize.STRING,
                tx_telefone: Sequelize.STRING,
                id_cidade: Sequelize.INTEGER
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }
    static associate(models) {
        this.belongsTo(models.cidade, { foreignKey: "cidadeinstituicao_fk", as: "cidadeinstituicao" });
      }
}

export default tb_instituicao;