'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jb-jenkinsfile:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ scriptName: 'Foo' });
  });

  it('creates files', () => {
    assert.file(['Foo']);
  });
});
