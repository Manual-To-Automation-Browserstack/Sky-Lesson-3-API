![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# Manual To Automation @ SKY - Lesson 3 - API Testing in Playwright <a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png" alt="playwright" height="22" /></a>

## Introduction

This example code provides some applications of GET and POST requests using the GitHub API. It is a simple Playwright application that creates a GitHub repository, adds issues to it, and verifies that they are present.

---

## Installation

There are a few things that you will need before you can get started.

* NodeJS - use [this](https://phoenixnap.com/kb/install-node-js-npm-on-windows) guide for Windows and [this](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/) guide for Mac.
* Git for pulling down the code - follow [this]() guide for installing Git on all platforms. There are other useful guides on the website mentioned previously. Start [here](https://github.com/git-guides) anad follow through to the various links to learn more about Git. It will be very useful on your automation journey. If you have any issues with tokens or user credentials, let me know as this can trip a lot of people up.
* Visual Studio Code - You can download VS Code for free from [here](https://code.visualstudio.com/download). This is a very useful tool for writing and running your code as it has auto complete, and powerful debugging capabilities. [This](https://code.visualstudio.com/docs/introvideos/basics) is a handy starting point for how to get started with VS Code.

Once you have these installed, you are good to go to the next step.

Follow the below steps to get the code onto your local machine.

* Open a terminal. (Terminal on Mac, Command Prompt on Windows)
* Go to the directory where you want to place the code using [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd) for Windows, and it functions mostly the same for Mac. You just use "cd" but the folder structure on Mac is different (/Users/username/Documents instead of C:/Users/username/Documents)
* Copy the following command into the terminal, (remember, you must have [Git](https://git-scm.com/downloads) installed)
```sh
git clone https://github.com/Manual-To-Automation-Browserstack/Sky-Lesson-3-POM.git.
```
* Move into the directory that you just cloned by typing
```sh
cd Sky-Lesson-3-POM
```
* When inside this directory, copy the following command and run it:
```sh
npm install
```
* Once all the dependencies are installed, you will be able to run the tests by using the following commands:
```sh
# Runs the test.js file
npm run test
```

There is only one script for this example. You can add more as needed in the "scripts" section of the [package.json](./package.json) file. Once you have added one, you then simply run:

```sh
npm run <insert script name>
```

For a full list of the various command line options for running Plawright tests, see [this](https://playwright.dev/docs/test-cli) link.

# GitHub Connection Config

To configure the connection to GitHub, you need to add your GitHub token (found in your Developer settings, more info [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)) to the playwright.config.js file. Alternatively, you can add the token as an Environment Variable as I have done.

```
    // All requests we send go to this API endpoint.
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
        // We set this header per GitHub guidelines.
        'Accept': 'application/vnd.github.v3+json',
        // Add authorization token to all requests.
        // Assuming personal access token available in the environment.
        'Authorization': `token ${process.env.GITHUB_API_TOKEN}`,
    }
```