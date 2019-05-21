/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image_face_info', {
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
		pic_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		face_info: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		img_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'image_face_info',
		timestamps: false,
		freezeTableName: true
	});
};
