`use strict`;

import { Command } from 'commander';

const Program = new Command();

import { MapCommands } from './Commands.js';

/**
 * Glove-Box
 * @module
 **/
Program
    .name(`Glove-Box`)
    .description(`A CLI tool with multiple utilities`)
    .version(`1.0.0`);

MapCommands(Program);

Program.parse();
