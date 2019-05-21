/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('movement', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		discover_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		img_urls: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		tags: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'movement',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
