/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_login_info', {
		mobile_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		open_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		nick_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		avatar_url: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		gender: {
			type: DataTypes.INTEGER(2),
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
		language: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		Remarks1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Remarks2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Remarks3: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Remarks4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		portrait_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		autograph: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		specific_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		group_face_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		fake: {
			type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		member_id: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'user_login_info',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
