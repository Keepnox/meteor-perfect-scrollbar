Package.describe({
  name: 'keepnox:perfect-scrollbar',
  version: '0.6.8',
  // Brief, one-line summary of the package.
  summary: 'Perfect-scrollbar packaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Keepnox/meteor-perfect-scrollbar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.addFiles([
    'css/perfect-scrollbar.css',
    'js/perfect-scrollbar.js',
    'js/perfect-scrollbar.jquery.js'
  ], 'client');
  
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('keepnox:perfect-scrollbar');
  api.addFiles('perfect-scrollbar-tests.js');
});
