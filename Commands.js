'use strict';

/** Local Modules  **/
import {
    csvify_json,
    htmlify_markdown,
    jsonify_csv,
    jsonify_xml,
    stringify_pdf,
    markdownify_html,
    textify_html,
    tomlify_json,
    xmlify_json,
    yamlify_json
} from "./CommandFunctions.js";

/**
 * Commands - Map
 * @param {Object} Program - Instance of the commander program
 * @description Maps the various commands to the glove-box program.
 */
const MapCommands = (Program) => {

    Program
        .command(`jsonify_xml`)
        .description(`parse XML to JSON`)
        .option(`--path [string]`, `path to the xml file to parse`)
        .action(function(options) {
            jsonify_xml(options)
        });

    Program
        .command(`xmlify_json`)
        .description(`parse JSON to an XML`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            xmlify_json(options);
        });

    Program
        .command(`yamlify_json`)
        .description(`parse JSON to a YAML`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            yamlify_json(options);
        });

    Program
        .command(`tomlify_json`)
        .description(`parse JSON to TOML`)
        .option(`--path [string]`, `path to the json file to build the xml from`)
        .action(function(options) {
            tomlify_json(options);
        });

    Program
        .command(`markdownify_html`)
        .description(`parse Markdown to a HTML`)
        .option(`--path [string]`, `path to the markdown file to build the html from`)
        .action(function(options) {
            markdownify_html(options);
        });

    Program
        .command(`htmlify_markdown`)
        .description(`parse HTML into Markdown`)
        .option(`--path [string]`, `path to the markdown file to build the html from`)
        .action(function(options) {
            htmlify_markdown(options);
        });

    Program
        .command(`jsonify_csv`)
        .description(`parse a html file into a markdown string`)
        .option(`--path [string]`, `path to the markdown file to build the html from`)
        .action(function(options) {
            jsonify_csv(options);
        });

    Program
        .command(`csvify_json`)
        .description(`parse a html file into a markdown string`)
        .option(`--path [string]`, `path to the markdown file to build the html from`)
        .action(function(options) {
            csvify_json(options);
        });

    Program
        .command(`textify_html`)
        .description(`parse a html file into a plain text string`)
        .option(`--path [string]`, `path to the HTML file to build the plain text string from`)
        .action(function(options) {
            textify_html(options);
        });
}

export { MapCommands };
