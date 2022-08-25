`use strict`;

const {Command} = require(`commander`);

const Program = new Command();

Program
    .name(`Glove Box`)
    .description(`A CLI tool with multiple utilities for working with Salesforce data and systems.`)
    .version(`1.0.0`);

require(`./Commands`).Map(Program);

Program.parse();
