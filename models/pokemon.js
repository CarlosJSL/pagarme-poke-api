export default(sequelize, DataType) => {
const Pokemon = sequelize.define('pokemon', {
	name: {
		type: DataType.STRING,
		allowNull: false
	},
	price: {
		type: DataType.DOUBLE,
		allowNull: false
	},
	stock: {
		type: DataType.INTEGER,
		allowNull: true,
		defaultValue: 0
	}
 });
    return Pokemon
}