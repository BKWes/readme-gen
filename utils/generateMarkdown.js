const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}  ${renderLicenseBadge(data.license)}
  ## Description:  
  - ${data.description}

  ## Installation   
  - ${data.install}

  ## Usage   
  - ${data.usage}

  ## Contribution Guidelines
  - ${data.contributing}

  ## Test Instructions
  - ${data.tests}

  ## Licences
  

  ## Questions
  Here is a link to my [Github page](https://github.com/${data.github})  
  If you would like to contact me for further information or details on collaboration  
  Email ${data.name}: ${data.email}
`;
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

module.exports = { generateMarkdown, writeFile };
