'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.options.template || this.templatePath('Jenkinsfile'),
      this.destinationPath(this.options.scriptName),
      {
        ...this.options
      }
    );
  }
};
