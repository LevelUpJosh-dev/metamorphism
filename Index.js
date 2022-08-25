`use strict`;

import { Command } from 'commander';

const Program = new Command();

import { MapCommands } from './Commands.js';

Program
    .name(`Glove Box`)
    .description(`A CLI tool with multiple utilities for working with Salesforce data and systems.`)
    .version(`1.0.0`);

MapCommands(Program);

Program.parse();
