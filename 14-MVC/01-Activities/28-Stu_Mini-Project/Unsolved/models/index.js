const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
    foreignKey: 'project_id'
});

Project.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Project };
