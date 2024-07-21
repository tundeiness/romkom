const core = require('@actions/core');
const github = require('@actions/github');

const name = core.getInput('who-to-greet')
const outputVal = `Hello ${name} -romkom`;
core.setOutput(`greetings`, outputVal);
