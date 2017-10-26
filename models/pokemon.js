export default(sequelize, DataType) => {
  const Pokemon = sequelize.define('pokemon', {
    name: {
      type: DataType.STRING,
      allowNull: false,
      isAlpha: {
        msg: 'O nome só pode conter letras',
      },
    },
    price: {
      type: DataType.INTEGER,
      allowNull: false,
      isNumeric:{
        msg: 'O preço só pode conter números',
      }
    },
    stock: {
      type: DataType.INTEGER,
      allowNull: true,
      defaultValue: 1,
      isNumeric:{
        msg: 'O estoque só pode conter números',
      }
    },
  })
  return Pokemon
}
