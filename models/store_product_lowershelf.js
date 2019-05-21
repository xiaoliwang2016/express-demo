/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('store_product_lowershelf', {
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
			allowNull: false
		},
		product_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		product_code: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		product_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		sort_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		sell_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '2'
		},
		record_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		creator: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: ''
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
			allowNull: true,
			defaultValue: ''
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
		tableName: 'store_product_lowershelf',
		timestamps: false,
		freezeTableName: true
	});
};
