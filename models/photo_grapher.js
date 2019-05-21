/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('photo_grapher', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		event_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		states: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		valid_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		type_id: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		}
	}, {
		tableName: 'photo_grapher',
		timestamps: false,
		freezeTableName: true
	});
};
