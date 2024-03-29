/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('praise_info', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		activity_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		mobile_no: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		pic_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		pic_url: {
			type: DataTypes.STRING(512),
			allowNull: true
		},
		created_time: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		pic_strat: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'praise_info',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
