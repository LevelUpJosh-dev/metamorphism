'use strict';

/** Local Modules  **/
import { jsonify_xml, xmlify_json, markdownify_html, htmlify_markdown, yamlify_json, tomlify_json } from "./CommandFunctions.js";

/**
 * Commands - Map
 * @param {Object} Program - Instance of the commander program
 * @description Maps the various commands to the glove-box program.
 */
const MapCommands = (Program) => {

    Program
        .command(`jsonify_xml`)
        .description(`parse an XML file to a JSON representation of the xml`)
        .option(`--path [string]`, `path to the xml file to parse`)
        .action(function(options) {
            jsonify_xml(options)
        });

    Program
        .command(`xmlify_json`)
        .description(`parse a JSON representation of xml to an xml string`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            xmlify_json(options);
        });

    Program
        .command(`yamlify_json`)
        .description(`parse JSON file to a YAML string`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            yamlify_json(options);
        });

    Program
        .command(`tomlify_json`)
        .description(`parse a JSON file to a TOML string`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            yamlify_json(options);
        });

    Program
        .command(`markdownify_html`)
        .description(`parse a markdown file to a html string`)
        .option(`--path [string]`, `path to the markdown file to build the html from`)
        .action(function(options) {
            markdownify_html(options);
        });

    Program
        .command(`htmlify_markdown`)
        .description(`parse a html file into a markdown string`)
        .option(`--path [string]`, `path to the markdown file to build the html from`)
        .action(function(options) {
            htmlify_markdown(options);
        });
}

export { MapCommands };
