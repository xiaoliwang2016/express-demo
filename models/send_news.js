/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('send_news', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type_id: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		currency_id: {
			type: DataTypes.STRING(155),
			allowNull: true
		},
		validity: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		union_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		order_id: {
			type: DataTypes.STRING(155),
			allowNull: true
		},
		first: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		centre: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		reply_type: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'send_news',
		timestamps: false,
		freezeTableName: true
	});
};
