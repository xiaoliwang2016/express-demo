/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('common_banner', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		img_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'common_banner',
		timestamps: false,
		freezeTableName: true
	});
};
