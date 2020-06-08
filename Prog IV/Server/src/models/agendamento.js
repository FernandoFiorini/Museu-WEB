import Sequelize, { Model } from "sequelize";

class tb_agendamento extends Model {
    static init(sequelize) {
        super.init(
            {
                id_agendamento: {
                   type: Sequelize.INTEGER,
                   primaryKey: true,
                   autoIncrement:true
                },
                dt_visita: Sequelize.DATE,
                hr_visita: Sequelize.TIME,
                qt_pessoas: Sequelize.INTEGER,
                id_pessoa: Sequelize.INTEGER,
                id_instituicao: Sequelize.INTEGER

            },{
                sequelize,
                freezeTableName: true,
                timestamps: false
            })
        return this;

    }

    static associate(models) {
        this.belongsTo(models.pessoa, { foreignKey: "pessoagendamento_fk", as: "pessoagendamento" });
        this.belongsTo(models.instituicao, { foreignKey: "agendamentoinstituicao_fk", as: "agendamentoinstituicao" });
      }
}

export default tb_agendamento;