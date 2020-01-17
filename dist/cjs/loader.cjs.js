'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-6a30069f.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["github-contributions.cjs",[[0,"github-contributions",{"username":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
