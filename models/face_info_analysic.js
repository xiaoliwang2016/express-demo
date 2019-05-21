/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('face_info_analysic', {
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
		face_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		persisted_face_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		group_face_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		top: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		left: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pic_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sex_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		age_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		emotion_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		smile_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		reading_glasses_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		facial_hair_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bald_class: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		age: {
			type: "DOUBLE",
			allowNull: true
		},
		state: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'face_info_analysic',
		timestamps: false,
		freezeTableName: true
	});
};
