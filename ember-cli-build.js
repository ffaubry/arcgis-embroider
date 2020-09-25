'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const Funnel = require('broccoli-funnel');
const resolvePkg = require('resolve-pkg');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  const trees = [];
  trees.push(
    new Funnel(resolvePkg('@arcgis/core/assets'), {
      srcDir: '/esri',
      destDir: '/assets/esri'
    })
  );

  return require('@embroider/compat').compatBuild(app, Webpack, {    
    extraPublicTrees: trees  
  });
};
