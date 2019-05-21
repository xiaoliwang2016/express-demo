/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('diy_product', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		diy_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		json_content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		created_time: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'diy_product',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
