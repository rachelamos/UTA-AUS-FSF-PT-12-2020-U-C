const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.hasMany(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Location.belongsToMany(Traveller, {
  foreignKey: 'traveller_id',
});

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Trip.belongsToMany(Traveller, {
  foreignKey: 'traveller_id',
});

module.exports = { Traveller, Location, Trip };
