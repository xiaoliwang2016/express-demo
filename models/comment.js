/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comment', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		topic_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		reply_to: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
	}, {
		tableName: 'comment',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
