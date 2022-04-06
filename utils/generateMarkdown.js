const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}  
  ## Description:  
  - ${data.description}

  ## Installation Instructions  
  - ${data.install}

  ## Usage Information  
  - ${data.usage}

  ## Contribution Guidelines
  - ${data.contributing}

  ## Test Instructions
  - ${data.tests}

  ## Licences

  ## Questions
  Here is a link to my [Github page](https://github.com/${data.github})  
  If you would like to contact me for further information or details on collaboration  
  Email: ${data.email}
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
