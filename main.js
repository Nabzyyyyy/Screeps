var roleHarvester = require('role.harvester');
var roles2Harvester = require('role.s2harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepaircreep = require('role.repaircreep');

module.exports.loop = function () {
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    
        var s2harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 's2harvester');
    console.log('s2Harvesters: ' + s2harvesters.length);
    
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);
    
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);
    
        var repaircreeps = _.filter(Game.creeps, (creep) => creep.memory.role == 'repaircreep');
    console.log('Repaircreeps: ' + repaircreeps.length);
    
    if(upgraders.length < 3) {
        var newName = 'Upgrader' + Game.time;
        console.log('Attempting to spawn new upgrader: ' + newName);
        Game.spawns['Spawn'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }
    
    if(harvesters.length < 3) {
        var newName = 'Harvester' + Game.time;
        console.log('Attempting to spawn new harvester: ' + newName);
        Game.spawns['Spawn'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }
    
    if(s2harvesters.length < 2) {
        var newName = 's2Harvester' + Game.time;
        console.log('Attempting to spawn new s2harvester: ' + newName);
        Game.spawns['Spawn'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 's2harvester'}});        
    }
    
    if(builders.length < 3) {
        var newName = 'Builder' + Game.time;
        console.log('Attempting to spawn new builder: ' + newName);
        Game.spawns['Spawn'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'builder'}});        
    }
    
    if(repaircreeps.length < 1) {
        var newName = 'FixItFelixJr' + Game.time;
        console.log('Attempting to spawn new FixItFelix: ' + newName);
        Game.spawns['Spawn'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'repaircreep'}});        
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 's2harvester') {
            roles2Harvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
		if(creep.memory.role == 'builder') {
           roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repaircreep') {
           roleRepaircreep.run(creep);
        }
    }
}