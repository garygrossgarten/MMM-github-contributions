import { a as patchEsm, b as bootstrapLazy } from './core-bedd58aa.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["github-contributions", [[0, "github-contributions", { "username": [1] }]]]], options);
    });
};
export { defineCustomElements };
