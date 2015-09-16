var harvester = require('harvester'),
    builder = require('builder'),
    spawner = require('spawner'),
    guard = require('guard');

module.exports = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        console.log(creep.memory);
        if(creep.memory.role == 'harvester') {
            console.log(creep.name + " harvesting!");
            harvester(creep);
        }

        if(creep.memory.role == 'builder') {
            console.log(creep.name + " building!");
            builder(creep);
        }

        // 	if(creep.memory.role == 'spawner') {
        // 	    spawner(creep);
        // 	}

        if(creep.memory.role == 'guard') {
            guard(creep);
        }
    }

    for(var name in Game.spawns) {
        spawner(Game.spawns[name]);
    }
};