# 👩🏽‍💻Professional README Generator

This is the Challenge -09 related to Node.js

[![ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

This project is a professional README generator that automates the process of creating a well-structured and informative README file for software projects. It provides a user-friendly interface where users can input project details such as project name, description, installation instructions, usage guidelines, credits, license information, features, contributing guidelines, tests, and contact information. The generator then generates a README file in Markdown format with a table of contents and sections for each of the provided details. This saves developers time and ensures consistency in the documentation of their projects.

## Table of Contents
- [👩🏽‍💻Professional README Generator](#professional-readme-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

To use this repository, follow these steps:

1. Clone this repository to your local machine.
2. Follow the `Usage` steps described below.
  
## Usage

The usage of this application is to automate the creation of a README file for a project. A README file is a document that introduces, explains, or provides key information about a project. It's often the first document people read when they encounter a project on platforms like GitHub.

This is a step-by-step guide on how to use this application:
1. **Install the application:** Clone or download the application to your local machine. Then, navigate to the application directory in your terminal and run npm install to install the necessary dependencies (inquirer).

2. **Run the application:** In the terminal, run the command node index.js to start the application.

3. **Answer the prompts:** The application will prompt you with a series of questions about your project. Answer each question as accurately as possible. The questions cover the project's title, description, installation instructions, usage information, credits, license, features, contribution guidelines, test instructions, GitHub username, and email address.

4. **Generate the README:** After you've answered all the questions, the application will generate a README file (README.md) based on your responses. The README will be saved in the same directory as the application.

5. **Use the README:** You can now use the generated README file for your project. You might need to make some minor edits or additions, but the bulk of the work has been done for you.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [ISC License.](https://opensource.org/licenses/ISC) : Internet Systems Consortium.


## Features

+ **Interactive prompts:** The application uses the inquirer package to prompt the user with a series of questions about their project. The questions cover the project's title, description, installation instructions, usage information, credits, license, features, contribution guidelines, test instructions, GitHub username, and email address.
+ **License badge generation:** The application includes a function (renderLicenseBadge) that generates a license badge based on the license selected by the user. The badge is a clickable image that links to the license's page on opensource.org.
+ **Markdown generation:** The application includes a function (generateMarkdown) that takes the user's responses and generates a Markdown-formatted README. The README includes a title, description, table of contents, installation instructions, usage information, credits, license information (including a badge), features, contribution guidelines, test instructions, and contact information.
+ **File writing:** The application writes the generated Markdown to a README.md file. This is done using the fs (file system) module's writeFile function.
+ **Error handling:** The application includes basic error handling. If there's an error when writing the file, it's logged to the console. Otherwise, a success message is logged.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

This application currently does not include any tests. As the application evolves, tests will be added. Check back for updates.

## Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



**_Thanks for stopping!_**
