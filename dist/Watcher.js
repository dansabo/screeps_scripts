var harvester = require('harvester'),
    builder = require('builder'),
    spawner = require('spawner');

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
            var targets = creep.room.find(FIND_HOSTILE_CREEPS);
            if(targets.length) {
                creep.moveTo(targets[0]);
                creep.attack(targets[0]);
            }
        }
    }

    for(var name in Game.spawns) {
        spawner(Game.spawns[name]);
    }
}