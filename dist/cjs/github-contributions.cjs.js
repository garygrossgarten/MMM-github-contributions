'use strict';

const core = require('./core-6a30069f.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["github-contributions.cjs",[[0,"github-contributions",{"username":[1]}]]]], options);
});
