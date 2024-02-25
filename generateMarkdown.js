// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'None') {
        return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    }
    return '';
    

    /* switch(license) {

        case 'MIT':
            return `[![${license} License][license-shield]][license-url]`;
            break;
            console.log('MIT License');
        case 'GNU':
            return `[![${license} License][license-shield]][license-url]`;
        case 'Apache':
            return `[![${license} License][license-shield]][license-url]`;
        case 'ISC':
            return `[![${license} License][license-shield]][license-url]`;
        default:
            return 'N/A';

    } */
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'None') {
        return `(https://opensource.org/licenses/${license})`;
    } 
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'None'){
        return `${renderLicenseBadge(license)}${renderLicenseLink(license)}

        `
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
Copyright (c) Silvia Reyes. All rights reserved.

Licensed under the [${data.license} License.](https://opensource.org/licenses/${data.license})


## Features
${data.features}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile: Your GitHub Profile
Email: Your Email Address
I'm always open to discussions and eager to help. Don't hesitate to get in touch!

> Thanks for stopping!
`;
}



module.exports = generateMarkdown;