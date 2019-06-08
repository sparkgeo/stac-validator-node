//https://code.tutsplus.com/tutorials/validating-data-with-json-schema-part-1--cms-25343

var Ajv = require('ajv');
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
