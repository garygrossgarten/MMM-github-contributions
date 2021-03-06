/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface GithubContributions {
    'username': string;
  }
}

declare global {


  interface HTMLGithubContributionsElement extends Components.GithubContributions, HTMLStencilElement {}
  var HTMLGithubContributionsElement: {
    prototype: HTMLGithubContributionsElement;
    new (): HTMLGithubContributionsElement;
  };
  interface HTMLElementTagNameMap {
    'github-contributions': HTMLGithubContributionsElement;
  }
}

declare namespace LocalJSX {
  interface GithubContributions {
    'username'?: string;
  }

  interface IntrinsicElements {
    'github-contributions': GithubContributions;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'github-contributions': LocalJSX.GithubContributions & JSXBase.HTMLAttributes<HTMLGithubContributionsElement>;
    }
  }
}


