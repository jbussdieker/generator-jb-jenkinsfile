'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jb-jenkinsfile:jenkinsfile', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/jenkinsfile'))
      .withOptions({ scriptName: 'Bar' });
  });

  it('creates files', () => {
    assert.file(['Bar']);
  });
});
