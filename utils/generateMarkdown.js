const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 2':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  switch (license) {
    case 'MIT':
      return '[MIT License](https://choosealicense.com/licenses/mit/)';
    case 'BSD 2':
      return '[BSD 2-Clause License](https://choosealicense.com/licenses/bsd-2-clause/)';
    case 'GNU':
      return '[GNU General Public License](https://choosealicense.com/licenses/gpl-2.0/)';
  }
};

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
  This application is covered under the ${renderLicenseLink(data.license)}.

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
