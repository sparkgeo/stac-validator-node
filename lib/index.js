//this tutorial is written by the guy who created ajv
//https://code.tutsplus.com/tutorials/validating-data-with-json-schema-part-1--cms-25343

var Ajv = require('ajv');
var fs = require("fs");

console.log("\n *START* \n");
var contents = fs.readFileSync("package.json");

var jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("Contributors:", jsonContent.contributors);
console.log("Dependencies:", jsonContent.dependencies);
console.log("Keywords:", jsonContent.keywords);
console.log("\n *EXIT* \n");



var ajv = new Ajv({$data: true}); // options can be passed, e.g. {allErrors: true}

var schema = {
    "properties": {
      "smaller": {
        "type": "number",
        "maximum": { "$data": "1/larger" }
      },
      "larger": { "type": "number" }
    }
};

var data = {
    smaller: 5,
    larger: 2
};


var validate = ajv.compile(schema);
var valid = validate(data);
if (!valid) console.log(validate.errors);
