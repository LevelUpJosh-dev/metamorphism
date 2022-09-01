`use strict`;

import { Command } from 'commander';

const Program = new Command();

import { MapCommands } from './Commands.js';

/**
 * MetaMorphisM
 * @description A command line tool that allow you to alter the composition of data
 * @example
 * node Index.js xmlify_json --path "./Examples/Json/xml.json"
 * node Index.js tomlify_json --path "./Examples/Json/xml.json"
 * node Index.js jsonify_xml --path "./Examples/Xml/b2b.xml"
 * @module
 **/
Program
    .name(`MetaMorphisM`)
    .description(`Allows you to alter the composition of data`)
    .version(`1.0.0`);

MapCommands(Program);

Program.parse();
