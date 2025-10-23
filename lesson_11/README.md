# robot-dreams

Description
Mocking and testing isolated components.
UI automation framework for robot_dreams test project.

Prerequisites
In order to start automation you need to install chromium: npx playwright install chromium

Prettier Setup for VSCode
Open Settings and find Prettier: Config Path
Insert value <>/prettier.configuration.js
Save Changes
ENV VARIABLES
check - .env-example file

Naming convention
All files should be kebab case like some-cool-file.ts
All classes should be in camel case and start with capital letter
Tags
Smoke tests for basic functionality

Rule
Please always wrap all page object and page components methods into @step decorator

Before Commit
Please make sure to run npm run commit-check
