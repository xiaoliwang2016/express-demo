/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('advance_photos', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mobile_no: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		union_id: {
			type: DataTypes.STRING(75),
			allowNull: true
		},
		start_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		user_name: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		area: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		source: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		Remarks: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		create_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		number: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		activity_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'advance_photos',
		timestamps: false,
		freezeTableName: true
	});
};
