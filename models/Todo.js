module.exports = (Sequelize, DataTypes) => {
   const model = Sequelize.define("Todo", {
      task: DataTypes.STRING(255)
   }, {
      tableName: "todos",
      timestamps: false,
   });

   return model;
}