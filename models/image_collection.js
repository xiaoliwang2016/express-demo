/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image_collection', {
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
		pic_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(2),
			allowNull: true
		}
	}, {
		tableName: 'image_collection',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
