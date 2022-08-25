'use strict';

/** Core Packages  **/
const fs = require(`fs`);

/** Additional Packages  **/
const jsome = require(`jsome`);
const xml2js = require(`xml2js`);

const Commands = {};

/**
 * Commands Map
 * @param {Object} Program
 * @description Maps the various commands to the glove-box program.
 * @constructor
 */
Commands.Map = (Program) => {

    Program
        .command(`jsonify_xml`)
        .description(`parse an xml file and output a JS object representation of the xml`)
        .option(`--path [string]`, `path to the xml file to parse`)
        .action(function(options) {
            const xml_string = fs.readFileSync(options.path, { "encoding": "utf8" });
            const parser = new xml2js.Parser();
            parser.parseString(xml_string, function (err, result) {
                jsome(result);
            });
        });

    Program
        .command(`xmlify_json`)
        .description(`convert the JS object representation of the xml to an xml string`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            const xml_json = JSON.parse(fs.readFileSync(options.path, { "encoding": "utf8" }));
            const builder = new xml2js.Builder();
            const xml_string = builder.buildObject(xml_json);
            console.log(xml_string);
        });
}

module.exports = Commands;
