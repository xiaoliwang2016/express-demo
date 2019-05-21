/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('internal_order', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		part_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		catalog_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		work_id: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		customer_no: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		mobile: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		state: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		order_no: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'internal_order',
		timestamps: true,
		freezeTableName: true,
		createdAt: 'create_time',
		updatedAt: false,
		deletedAt: false
	});
};
