//this tutorial is written by the guy who created ajv
//https://code.tutsplus.com/tutorials/validating-data-with-json-schema-part-1--cms-25343

'use strict';

var Ajv = require('ajv');
var fs = require("fs");
const draft06 = require('ajv/lib/refs/json-schema-draft-06.json')

console.log("\n *START* \n");

// for (let j = 0; j < process.argv.length; j++) {  
//     console.log(j + ' -> ' + (process.argv[j]));
// }

var initial_geojson = fs.readFileSync("test/test_data/local_schema/item_v061/json-schema/geojson.json");
var initial_contents = fs.readFileSync("test/test_data/good_item_v061.json");
var initial_schema = fs.readFileSync("test/test_data/local_schema/item_v061/json-schema/item.json");

// if (process.argv[2] == 'item') {
//     var initial_contents = fs.readFileSync("test/test_data/good_item_v061.json");
//     var initial_schema = fs.readFileSync("test/test_data/local_schema/item_v061/json-schema/item.json");
// } else {
//     var initial_contents = fs.readFileSync("test/test_data/good_collection_v061.json");
//     var initial_schema = fs.readFileSync("test/test_data/local_schema/collection_v061/json-schema/collection.json");
// }

var contents = JSON.parse(initial_contents);
var schema = JSON.parse(initial_schema);
var geojson = JSON.parse(initial_geojson);

// Get Value from JSON
//console.log("Properties:", contents.properties);

var ajv = new Ajv();

ajv.addMetaSchema(draft06);

// var validate = ajv.addSchema(schema)
//                    .compile(geojson);

// var validate = ajv.compile(schema);
// var valid = validate(contents);
// if (!valid) console.log(ajv.errors);

console.log(validate(schema, contents));

console.log("\n *EXIT* \n");

function validate(schema, data) {
    return ajv.validate(schema, data)
    ? true : ajv.errors;
}