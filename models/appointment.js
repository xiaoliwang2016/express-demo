/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('appointment', {
		mobile_no: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		activity_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		user_name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		participants: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		province: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		address: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		source: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'appointment',
		timestamps: false,
		freezeTableName: true
	});
};
