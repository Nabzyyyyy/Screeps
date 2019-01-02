
//Basic Spawn Creep console command	- harvester
Game.spawns['Center Spawn'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Harvester1',
    { memory: { role: 'harvester' } } );
	
//Basic Spawn Creep console command	- upgrader
Game.spawns['Center Spawn'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Upgrader1',
    { memory: { role: 'upgrader' } } );
	
	//Basic Spawn Creep console command - builder
Game.spawns['Center Spawn'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',
    { memory: { role: 'builder' } } );