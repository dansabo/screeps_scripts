var harvester = require('harvester'),
    builder = require('builder'),
    spawner = require('spawner'),
    guard = require('guard');

module.exports = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'harvester') {
            creep.say(creep.name + " harvesting!");
            harvester(creep);
        }

        if(creep.memory.role == 'builder') {
            //console.log(creep.name + " building!");
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