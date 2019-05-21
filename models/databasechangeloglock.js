/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('databasechangeloglock', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LOCKED: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		LOCKGRANTED: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LOCKEDBY: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'databasechangeloglock',
		timestamps: false,
		freezeTableName: true
	});
};
