'use strict';

/** Core Packages  **/
import fs from 'node:fs'

/** Additional Packages  **/
import * as json2toml from 'json2toml';
import * as json2yaml from 'json-to-pretty-yaml';
import * as json_format from 'json-format';
import showdown from 'showdown';
import xml2js from 'xml2js';
import { JSDOM } from 'jsdom'
import Papaparse from 'papaparse'
import { htmlToText } from 'html-to-text';
import * as Pdf from 'pdf-parse';

const tomlParser = json2toml.default;

/**
 * Takes a path to an XML file which will be transformed into JSON
 * @param { Object } options - Program options
 * @param { String } options.path - Path to XML file to be morphed JSON
 **/
const jsonify_xml = (options) => {
    const xml_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const parser = new xml2js.Parser();
    parser.parseString(xml_string, function (err, result) {
        const xmlJson =  json_format.default(result, {
            type : 'space',
            space : '4'
        });
        console.log(xmlJson);
    });
}

/**
 * Takes a path to a JSON file which will be transformed into XML
 * @param { Object } options - Program options
 * @param { String } options.path - Path to JSON file to be morphed XML
 **/
const xmlify_json = (options) => {
    const xml_json = JSON.parse(fs.readFileSync(options.path, { "encoding": "utf8" }));
    const builder = new xml2js.Builder();
    const xml_string = builder.buildObject(xml_json);
    console.log(xml_string);
}

/**
 * Takes a path to a JSON file which will be transformed into YAML
 * @param { Object } options - Program options
 * @param { String } options.path - Path to JSON file to be morphed into YAML
 **/
const yamlify_json = (options) => {
    const json_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const json = JSON.parse(json_string)
    const json_yaml = json2yaml.default.stringify(json);
    console.log(json_yaml);
}

/**
 * Takes a path to a JSON file which will be transformed into TOML
 * @param { Object } options - Program options
 * @param { String } options.path - Path to JSON file to be morphed into TOML
 **/
const tomlify_json = (options) => {
    const json_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const json = JSON.parse(json_string)
    const json_toml = tomlParser(json, {
            indent: 4,
            newlineAfterSection: true
        });
    console.log(json_toml);
}

/**
 * Takes a path to a markdown file which will be transformed into HTML
 * @param { Object } options - Program options
 * @param { String } options.path - Path to Markdown file to be morphed HTML
 **/
const htmlify_markdown = (options) => {
    const markdown_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const converter = new showdown.Converter();
    converter.setOption(`smartIndentationFix`, true)
    console.log(converter.makeHtml(markdown_string));
}

/**
 * Takes a path to an HTML file which will be transformed into Markdown
 * @param { Object } options - Program options
 * @param { String } options.path - Path to HTML file to be morphed into Markdown
 **/
const markdownify_html = (options) => {
    /**
     * Solves window not defined error with showdown library
     * which allows compatability with nodeJS.
     **/
    globalThis.window = new JSDOM('', {}).window
    const html_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const converter = new showdown.Converter();
    console.log(converter.makeMarkdown(html_string));
}

/**
 * Takes a path to a JSON file which will be transformed into CSV
 * @param { Object } options - Program options
 * @param { String } options.path - Path to JSON file to be morphed into CSV
 **/
const csvify_json = (options) => {
    const json = JSON.parse(fs.readFileSync(options.path, { "encoding": "utf8" }));
    const csv_string = Papaparse.unparse([json.Flow]);
    console.log(csv_string);
}

/**
 * Takes a path to an CSV file which will be transformed into JSON
 * @param { Object } options - Program options
 * @param { String } options.path - Path to CSV file to be morphed into JSON
 **/
const jsonify_csv = (options) => {
    const csv_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const csv_json = Papaparse.parse(csv_string);
    console.log(JSON.stringify(csv_json.data));
}

/**
 * Takes a path to an HTML file which will be transformed into Plain Text
 * @param { Object } options - Program options
 * @param { String } options.path - Path to HTML file to be morphed into Plain Text
 **/
const textify_html = (options) => {
    const html_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const html_plain_text = htmlToText(html_string, {
        "wordwrap": 130
    });
    console.log(html_plain_text);
}

export {
    csvify_json,
    htmlify_markdown,
    jsonify_csv,
    jsonify_xml,
    markdownify_html,
    textify_html,
    tomlify_json,
    xmlify_json,
    yamlify_json
};
