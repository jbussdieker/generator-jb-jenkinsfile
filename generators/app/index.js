'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ace ${chalk.red('generator-jb-jenkinsfile')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'scriptName',
        message: 'Script file name to use',
        default: 'Jenkinsfile'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    this.composeWith(require.resolve('../jenkinsfile'), {
      scriptName: this.props.scriptName
    });
  }
};
