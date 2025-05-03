/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { baseDirs, templates } = require('../utils/constant');

module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message:
        'What type of component do you want to create (elements | icons | layouts | shared)?',
      choices: ['elements', 'icons', 'layouts', 'shared'],
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the component?",
      validate: function (value) {
        if (!/.+/.test(value)) {
          return console.error('Missing', 'you must define a component name');
        }

        if (value.length < 3) {
          return console.error('Too Short', `"${value}" is not descriptive enough`);
        }

        return true;
      },
    },
    {
      type: 'confirm',
      name: 'isGeneric',
      message: 'Will this component use TypeScript generics?',
      default: false,
    },
  ],
  actions: function (data) {
    const baseDir = path.join(baseDirs.components, data.type);
    const indexFilePath = path.join(baseDir, 'index.ts');

    const componentType = data.isGeneric ? templates.genericComponent : templates.component;

    const actions = [
      {
        type: 'add',
        path: `${baseDir}/{{kebabCase name}}/{{pascalCase name}}.tsx`,
        templateFile: componentType,
      },
      {
        type: 'add',
        path: `${baseDir}/{{kebabCase name}}/index.ts`,
        template: `export { default } from './{{pascalCase name}}';`,
      },
    ];

    if (fs.existsSync(indexFilePath)) {
      actions.push({
        type: 'append',
        path: `${baseDir}/index.ts`,
        template: `export { default as {{pascalCase name}} } from './{{kebabCase name}}';`,
      });
    } else {
      actions.push({
        type: 'add',
        path: `${baseDir}/index.ts`,
        template: `export { default as {{pascalCase name}} } from './{{kebabCase name}}';`,
      });
    }

    actions.push({ type: 'custom-lint' });

    return actions;
  },
};
