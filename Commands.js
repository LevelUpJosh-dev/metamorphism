'use strict';

/** Local Modules  **/
const CommandFunctions = require('./CommandFunctions.js');

/** Module Container  **/
const Commands = {};

/**
 * Commands - Map
 * @param {Object} Program
 * @description Maps the various commands to the glovebox program.
 * @constructor
 */
Commands.Map = (Program) => {

    Program
        .command(`jsonify_xml`)
        .description(`parse an xml file and output a JS object representation of the xml`)
        .option(`--path [string]`, `path to the xml file to parse`)
        .action(function(options) {
            CommandFunctions.jsonify_xml(options)
        });

    Program
        .command(`xmlify_json`)
        .description(`parse a JS object representation of xml to an xml string`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            CommandFunctions.xmlify_json(options);
        });
}

module.exports = Commands;
