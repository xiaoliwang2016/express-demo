/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image_detail', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		union_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		activity_id: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		file_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		pic_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		pic_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		thumbnail_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		thumbnail_url2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pic_height: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		pic_width: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		file_size: {
			type: DataTypes.STRING(25),
			allowNull: true
		},
		exif: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(2),
			allowNull: false
		},
		Remarks: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		job_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		user_phone: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		scenes: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'image_detail',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
