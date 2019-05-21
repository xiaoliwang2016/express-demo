/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_address', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		user_phone: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		province: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		area: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		is_default: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		state: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		}
	}, {
		tableName: 'user_address',
		timestamps: false,
		freezeTableName: true
	});
};
