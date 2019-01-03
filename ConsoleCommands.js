
//Basic Spawn Creep console command	- harvester
Game.spawns['Spawn'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Harvester1',
    { memory: { role: 'harvester' } } );
	
	//Basic Spawn Creep console command	- harvester
Game.spawns['Spawn'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 's2Harvester1',
    { memory: { role: 's2harvester' } } );
	
//Basic Spawn Creep console command	- upgrader
Game.spawns['Spawn'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE], 'Upgrader1',
    { memory: { role: 'upgrader' } } );
	
	//Basic Spawn Creep console command - builder
Game.spawns['Spawn'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',
    { memory: { role: 'builder' } } );