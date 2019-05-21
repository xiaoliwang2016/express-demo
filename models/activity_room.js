/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('activity_room', {
		activity_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		activity_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		activity_type: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		activity_desc: {
			type: DataTypes.TEXT,
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
		status: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		watermark: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		activity_share: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		activity_address: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		banner_img: {
			type: DataTypes.STRING(256),
			allowNull: true
		},
		publicity_img: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		qrcode_img: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		watermark_img: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		command: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		photographer_amount: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		auditor: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		audit_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		public_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		tableName: 'activity_room',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
