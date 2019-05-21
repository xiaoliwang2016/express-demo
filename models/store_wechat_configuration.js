/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('store_wechat_configuration', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		version: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		store_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		app_id: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		app_secret: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		merchant_id: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		api_key: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		record_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		creator: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		creator_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		created_time: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		last_operator: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		last_operator_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'store_wechat_configuration',
		timestamps: false,
		freezeTableName: true
	});
};
