/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discover', {
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
		name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		start_time: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		end_time: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		banner: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		detail_img_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		level: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sequece: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'discover',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
