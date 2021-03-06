module.exports = (Sequelize, DataTypes) => {
   const model = Sequelize.define("Todo", {
      task: DataTypes.STRING(255)
   }, {
      tableName: "todos",
      timestamps: false,
   });


   model.associate = (models) => {
      model.belongsTo(models.Person, { foreignKey: "person_id" });
  }

   return model;
}