/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('common_room_name', {
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
		name: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'common_room_name',
		timestamps: false,
		freezeTableName: true
	});
};
