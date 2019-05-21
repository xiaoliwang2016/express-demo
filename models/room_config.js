/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('room_config', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		value: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		info: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		comment: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		room_no: {
			type: DataTypes.STRING(20),
			allowNull: false
		}
	}, {
		tableName: 'room_config',
		timestamps: false,
		freezeTableName: true
	});
};
