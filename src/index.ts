import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet: string = core.getInput('who-to-greet');
  const time: string = (new Date()).toTimeString();

  console.log(`Hello ${nameToGreet}!`);
  core.setOutput("time", time);
  
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload: string = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}