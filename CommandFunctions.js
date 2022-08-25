'use strict';

/** Core Packages  **/
const fs = require(`fs`);

/** Additional Packages  **/
const jsome = require(`jsome`);
const xml2js = require(`xml2js`);

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

module.exports = CommandFunctions;
