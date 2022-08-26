'use strict';

/** Core Packages  **/
import fs from 'node:fs'

/** Additional Packages  **/
import * as json2toml from 'json2toml';
import * as json2yaml from 'json-to-pretty-yaml';
import * as json_format from 'json-format';
import xml2js from 'xml2js';
import showdown from 'showdown';
import { JSDOM } from 'jsdom';

/**
 * Takes a path to a XML file which will be transformed into JSON
 * @param { Object } options - Program options
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
 **/
const yamlify_json = (options) => {
    const json_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const json = JSON.parse(json_string)
    const json_yaml = json2yaml.default.stringify(json);
    console.log(json_yaml);
}

/**
 * Takes a path to a markdown file which will be transformed into HTML
 * @param { Object } options - Program options
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

export { xmlify_json, markdownify_html, htmlify_markdown, jsonify_xml, yamlify_json };
