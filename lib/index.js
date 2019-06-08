// https://www.npmjs.com/package/jsonschema

// var Validator = require('jsonschema').Validator;
// var v = new Validator();
// var instance = {"id": 4};
// var schema = {"type": "number"};
// console.log(v.validate(instance, schema));

var Validator = require('jsonschema').Validator;
  var v = new Validator();
 
  // Address, to be embedded on Person
  var addressSchema = {
    "id": "/SimpleAddress",
    "type": "object",
    "properties": {
      "lines": {
        "type": "array",
        "items": {"type": "string"}
      },
      "zip": {"type": "string"},
      "city": {"type": "string"},
      "country": {"type": "string"}
    },
    "required": ["country"]
  };
 
  // Person
  var schema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
      "name": {"type": "string"},
      "address": {"$ref": "/SimpleAddress"},
      "votes": {"type": "integer", "minimum": 1}
    }
  };
 
  var p = {
    "name": "Barack Obama",
    "address": {
      "lines": [ "1600 Pennsylvania Avenue Northwest" ],
      "zip": "DC 20500",
      "city": "Washington",
      "country": "USA"
    },
    //"votes": "lots"
    "votes": "lots"
  };
 
  v.addSchema(addressSchema, '/SimpleAddress');
  console.log(v.validate(p, schema));