// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum (what we want))
// Every time you create your own module you have to start it with './'
const names = require("./4-names");
const sayHi = require("./5-utils");
const { john, peter } = require("./4-names");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("Sue");
sayHi(john);
sayHi(peter);
sayHi(names.john);
sayHi(names.peter);
sayHi(john);
