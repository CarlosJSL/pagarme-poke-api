export default(sequelize, DataType) => {
const Pokemon = sequelize.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	stock: {
		type: Sequelize.INTEGER,
		allowNull: true,
		defaultValue: 0
	}
 });
    return Pokemon
}