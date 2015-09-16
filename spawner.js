var Roles =
{
    builder: {
        name: 'builder',
        body: [WORK, WORK, CARRY, MOVE]
    },
    harvester: {
        name: 'harvester',
        body: [WORK, CARRY, MOVE]
    },
    guard: {
        name: 'guard',
        body: [TOUGH, ATTACK, MOVE, MOVE]
    }
};

module.exports = function() {
    if(Object.keys(Game.creeps).length % 3 === 0) {
        createRole(Roles.guard);
    }
    if(Object.keys(Game.creeps).length % 2 === 0) {
        createRole(Roles.builder);
    }
    createRole(Roles.harvester);
};

var createRole = function(role) {
    if(Game.spawns.Spawn1.canCreateCreep(role.body) == OK) {
        Game.spawns.Spawn1.createCreep(role.body, null, {role: role.name});
        console.log("Spawning a new " + role.name +"!")
    }
};
