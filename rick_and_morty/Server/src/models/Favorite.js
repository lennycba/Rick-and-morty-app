const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey:true
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false
      },
      status:{
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull:true
      },
      species:{
         type: DataTypes.STRING,
         allowNull: false
      },
      gender:{
         type:DataTypes.ENUM('Female','Male','Genderless','unknown'),
         allowNull:false
      },
      origin:{
         type: DataTypes.JSON,
         allowNull: true
      },
      image:{
         type: DataTypes.STRING,
         allowNull:false
      }
   }, { timestamps: false });
};
