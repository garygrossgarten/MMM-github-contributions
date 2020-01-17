import { a as patchEsm, b as bootstrapLazy } from './core-bedd58aa.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["github-contributions",[[0,"github-contributions",{"username":[1]}]]]], options);
  });
};

export { defineCustomElements };
