import { p as patchBrowser, b as bootstrapLazy } from './core-bedd58aa.js';

patchBrowser().then(options => {
  return bootstrapLazy([["github-contributions",[[0,"github-contributions",{"username":[1]}]]]], options);
});
