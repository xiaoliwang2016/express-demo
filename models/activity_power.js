/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('activity_power', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		activity_id: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(6),
			allowNull: true
		}
	}, {
		tableName: 'activity_power',
		timestamps: false,
		freezeTableName: true
	});
};
