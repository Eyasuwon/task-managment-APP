const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Task = sequelize.define('Task', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = Task;
