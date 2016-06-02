#!/usr/bin/env node
'use strict';
let Git = require("nodegit");
let path = require('path');
let fs = require('fs');
/**
 * Default location of the git commit message.
 */
const COMMIT_MESSAGE_LOCATION = ".git/COMMIT_EDITMSG";

/**
 * For example: BACKBASE-143
 */
let jiraTicketRegex = /[A-Z]+-[0-9]+/;

/**
 * From a given branch name extract the Jira ticket number.
 * @param branchName the branch name
 * @returns the Jira ticket number.
 */
let getJiraTicket = (branchName) => {
    return jiraTicketRegex.exec(branchName)[0];
};
/**
 * Checks and updates the commit message with the given jira ticket number
 * @param jiraTicket the jira ticket number
 */
let checkAndUpdateCommitMessage = (jiraTicket) => {
    let commitMessage = fs.readFileSync(COMMIT_MESSAGE_LOCATION, "utf8");
    if (commitMessage.length < jiraTicket.length
        || commitMessage.substring(0, jiraTicket.length) !== jiraTicket) {
        commitMessage = jiraTicket + ": " + commitMessage;
    }
    fs.writeFileSync(COMMIT_MESSAGE_LOCATION, commitMessage, "utf8");
};



Git.Repository.open(".")
    .then((repo) => {
        return repo.getCurrentBranch();
    })
    .catch((e) => {
        console.error("error getting current branch", e);
        process.exit(1);
    })
    .then((currentBranch) => {
        let jiraTicket = getJiraTicket(currentBranch.name());
        checkAndUpdateCommitMessage(jiraTicket);
    })
    .catch((e) => {
        console.error("error getting branch name", e);
        process.exit(1);
    });