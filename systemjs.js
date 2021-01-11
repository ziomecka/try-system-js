const Builder = require('systemjs-builder');

const builder = new Builder('src');

builder.bundle('index.js', 'dist/index.js')
.then(() => {
    console.log('Build complete');
  })
.catch((err) => {
    console.log('Build error: ', err);
  });