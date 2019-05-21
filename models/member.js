/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nick_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		portrait_url: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		avatar_url: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		autograph: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		specific_date: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		language: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		remarks1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		remarks2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		remarks3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		remarks4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		last_modify_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		mobile_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		open_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		gender: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		}
	}, {
		tableName: 'member',
		timestamps: false,
		freezeTableName: true
	});
};
