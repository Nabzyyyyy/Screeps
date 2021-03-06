var roleRepaircreep = {

    run: function(creep) {
        if(creep.memory.repairing && creep.carry.energy == 0) {
                creep.memory.repairing = false;
                creep.say('harvest');
	    }
	
	    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
	            creep.memory.repairing = true;
	            creep.say('I CAN FIX IT!');
	    }
    
        const targets = creep.room.find(FIND_STRUCTURES, {
    	    filter: object => object.hits < object.hitsMax
        });
    
        if(creep.memory.repairing) {
            if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
    	    creep.moveTo(targets[0]);
            }
        }
    
        else {
	            var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
	        }
    }
};

module.exports = roleRepaircreep;