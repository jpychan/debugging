// Overview
// 1. Initialize variables
// 2. Define functions
// 3. Write code

// Step 1: initialize your variables

// Global objects
var navigation = {
  x: -2,
  y: "Banana",
  z: "Beep",
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  frequency: "Kenneth",
  message: "Bugs are cool.",
  beacon: false
};

var module1 = {
  'name': 'propulsion',
  'size': 4,
  'enabled': false,
  'essential': true,
}

var module2 = {
  'name': 'life-support',
  'size': 2,
  'enabled': false,
  'essential': true,
}

var availableModules = [module1, module2];

// Step 2: define your functions

function powerOn() {
  ship.powerOn = true;
}

function countModules(){
  return availableModules.length;
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function findmodule() {
  for(var index=0; index<availableModules.length; index++) {
      if(availableModules[index].name=="life-support") {
          return index;
      }
  }
}

// Step 3: Write your code to be executed when page loads
index = findmodule();
loadModule(index);
console.log(index);