import * as core from '@actions/core';
import * as github from '@actions/github';
import { WebhookPayload } from '@actions/github/lib/interfaces';

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet: string = core.getInput('who-to-greet');
  const time: string = (new Date()).toTimeString();

  console.log(`Hello ${nameToGreet}!`);
  core.setOutput("time", time);
  
  const payload: WebhookPayload = github.context.payload;
  console.log(`merging ${payload.pull_request.head.ref} into ${payload.pull_request.base.ref}`);
} catch (error) {
  core.setFailed(error.message);
}