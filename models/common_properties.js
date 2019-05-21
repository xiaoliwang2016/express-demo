/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('common_properties', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		the_key: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		the_value: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'common_properties',
		timestamps: false,
		freezeTableName: true
	});
};
