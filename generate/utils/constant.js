/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
  baseDirs: {
    app: path.join('src', 'app'),
    features: path.join('src', 'features'),
    components: path.join('src', 'components'),
    services: path.join('src', 'services'),
  },
  templates: {
    genericComponent: './generate/component/templates/generic-component.hbs',
    component: './generate/component/templates/component.hbs',
    feature: './generate/feature/templates/feature.hbs',
    page: './generate/feature/templates/page.hbs',
    layout: './generate/feature/templates/layout.hbs',
  },
};
