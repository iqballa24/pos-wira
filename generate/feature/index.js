/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const { baseDirs, templates } = require('../utils/constant');

const helper = {
  getGroupRoutes: () => {
    const appPath = baseDirs.app;
    const folders = ['new', 'root'];

    const groupingFolder = fs
      .readdirSync(appPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && /^\(.*\)$/.test(dirent.name))
      .map((dirent) => dirent.name);

    if (groupingFolder.length > 0) {
      return [...folders, ...groupingFolder];
    }

    return folders;
  },

  generatePathFeaturesFolder: `${baseDirs.features}/{{kebabCase name}}`,

  validateName: (value) => {
    if (!/.+/.test(value)) {
      return console.error('Missing', 'you must define a feature name');
    }

    if (value.length < 3) {
      return console.error('Too Short', `"${value}" is not descriptive enough`);
    }

    return true;
  },
};

module.exports = {
  description: 'Generates new feature',
  prompts: [
    {
      type: 'list',
      name: 'group',
      message: 'What group folder for this feature?',
      choices: helper.getGroupRoutes(),
    },
    {
      type: 'input',
      name: 'groupName',
      message: "What's the name of the group?",
      validate: helper.validateName,
      when: (answer) => answer.group === 'new',
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the feature?",
      validate: helper.validateName,
    },
  ],
  actions: function (data) {
    const isRootRoute = data.group === 'root';
    const groupName = data.group === 'new' ? `({{kebabCase groupName}})` : data.group;
    const groupRoute = isRootRoute ? '' : `${groupName}/`;

    const pagePaths = [
      {
        path: `${baseDirs.app}/${groupRoute}{{kebabCase name}}/page.tsx`,
        templateFile: templates.page,
      },
    ];

    const featurePaths = [
      {
        path: `${helper.generatePathFeaturesFolder}/sections/Example{{pascalCase name}}Section.tsx`,
        templateFile: templates.component,
      },
      {
        path: `${helper.generatePathFeaturesFolder}/sections/index.ts`,
        template: `export { default as Example{{pascalCase name}}Section } from './Example{{pascalCase name}}Section';`,
      },
      {
        path: `${helper.generatePathFeaturesFolder}/components/Example{{pascalCase name}}Component.tsx`,
        templateFile: templates.component,
      },
      {
        path: `${helper.generatePathFeaturesFolder}/components/index.ts`,
        template: `export { default as Example{{pascalCase name}}Component } from './Example{{pascalCase name}}Component';`,
      },
      {
        path: `${helper.generatePathFeaturesFolder}/index.tsx`,
        templateFile: templates.feature,
      },
    ];

    if (!isRootRoute) {
      pagePaths.push({
        path: `${baseDirs.app}/${groupRoute}layout.tsx`,
        templateFile: templates.layout,
      });
    }

    return [
      ...featurePaths.map(({ path, templateFile, template }) => ({
        type: 'add',
        path,
        ...(templateFile ? { templateFile } : { template }),
      })),
      ...pagePaths.map(({ path, templateFile }) => ({
        type: 'add',
        path,
        templateFile,
      })),
      { type: 'custom-lint' },
    ];
  },
};
