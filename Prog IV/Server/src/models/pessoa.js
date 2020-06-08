import Sequelize, { Model } from "sequelize";

class tb_pessoa extends Model {
    static init(sequelize) {
        super.init(
            {
                id_pessoa: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                tx_nome: Sequelize.STRING,
                tx_email: Sequelize.STRING,
                nr_idade: Sequelize.INTEGER,
                tx_telefone: Sequelize.STRING,
                //Chave estrangeira
                id_cidade: Sequelize.INTEGER,
            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;
    }


    static associate(models) {
        this.belongsTo(models.cidade, { foreignKey: "cidadepessoa_fk", as: "cidadePessoa" });
      }
}

export default tb_pessoa;