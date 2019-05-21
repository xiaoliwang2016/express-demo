/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('databasechangelog', {
		ID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		AUTHOR: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		FILENAME: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		DATEEXECUTED: {
			type: DataTypes.DATE,
			allowNull: false
		},
		ORDEREXECUTED: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		EXECTYPE: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		MD5SUM: {
			type: DataTypes.STRING(35),
			allowNull: true
		},
		DESCRIPTION: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		COMMENTS: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		TAG: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		LIQUIBASE: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		CONTEXTS: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		LABELS: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		DEPLOYMENT_ID: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'databasechangelog',
		timestamps: false,
		freezeTableName: true
	});
};
