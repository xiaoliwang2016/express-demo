/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('browsing_history', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		activity_id: {
			type: DataTypes.STRING(50),
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
		wechat_version: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		system: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		brand: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		model: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
	}, {
		tableName: 'browsing_history',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
