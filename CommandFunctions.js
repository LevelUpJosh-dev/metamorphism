'use strict';

/** Core Packages  **/
const fs = require(`fs`);

/** Additional Packages  **/
const jsome = require(`jsome`);
const xml2js = require(`xml2js`);
const showdown = require('showdown');
const { JSDOM } = require('jsdom');

globalThis.window = new JSDOM('', {}).window

/** Module Container  **/
const CommandFunctions = {};

CommandFunctions.jsonify_xml = (options) => {
    const xml_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const parser = new xml2js.Parser();
    parser.parseString(xml_string, function (err, result) {
        jsome(result);
    });
}

CommandFunctions.xmlify_json = (options) => {
    const xml_json = JSON.parse(fs.readFileSync(options.path, { "encoding": "utf8" }));
    const builder = new xml2js.Builder();
    const xml_string = builder.buildObject(xml_json);
    console.log(xml_string);
}

CommandFunctions.htmlify_markdown = (options) => {
    const markdown_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const converter = new showdown.Converter();
    converter.setOption(`smartIndentationFix`, true)
    console.log(converter.makeHtml(markdown_string));
}

CommandFunctions.markdownify_html = (options) => {
    const markdown_string = fs.readFileSync(options.path, { "encoding": "utf8" });
    const converter = new showdown.Converter();
    console.log(converter.makeMarkdown(markdown_string));
}

module.exports = CommandFunctions;
