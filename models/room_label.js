/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('room_label', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		room_no: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		label: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'room_label',
		timestamps: false,
		freezeTableName: true
	});
};
