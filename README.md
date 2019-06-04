# Spatial Temporal Asset Catalog (STAC) Validator for nodejs


This utility allows users to validate STAC json files against the [STAC](https://github.com/radiantearth/stac-spec) spec.

It has been developed on nodejs version v10.16.0 and will validate against a URL containing JSON and will respond with a list of errors as validated against the current STAC specification.

Example usages can be found below


## Requirements for your own install

* nodejs (tested on v10.16.0)
* npm

(others referenced in package.json)

For tests
    * mocha

## Example (still just placeholder from the python validator)

```bash
pip install stac_validator
stac_validator --help

Description: Validate a STAC item or catalog against the STAC specification.

Usage:
    stac_validator <stac_file> [--spec_dirs STAC_SPEC_DIRS] [--version STAC_VERSION] [--threads NTHREADS] [--verbose] [--timer] [--log_level LOGLEVEL] [--follow]

Arguments:
    stac_file  Fully qualified path or url to a STAC file.

Options:
    -v, --version STAC_VERSION   Version to validate against. [default: master]
    -h, --help                   Show this screen.
    --spec_dirs STAC_SPEC_DIRS   Path(s) to local directory containing specification files. Separate paths with a comma. [default: None]
    --threads NTHREADS           Number of threads to use. [default: 10]
    --verbose                    Verbose output. [default: False]
    --timer                      Reports time to validate the STAC. (seconds)
    --log_level LOGLEVEL         Standard level of logging to report. [default: CRITICAL]
    --follow                     Follow any child links and validate those links. [default: False]
    
stac_validator https://cbers-stac.s3.amazonaws.com/CBERS4/MUX/057/122/catalog.json -v v0.5.2
```

Example for STAC extensions
```bash
stac-spec/extensions/eo/example-landsat8.json --spec_dirs stac-spec/extensions/eo,local_schema/item_v061/json-schema --verbose
```
See the tests directory for examples on different usages.