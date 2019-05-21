/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('maggie_album', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		activity_id: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		task_id: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		user_name: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		user_phone: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		photo_grapher_name: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		photo_grapher_phone: {
			type: DataTypes.STRING(15),
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
		qr_code_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		state: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		maggie_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		order_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
	}, {
		tableName: 'maggie_album',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
