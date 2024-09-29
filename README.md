# @selfage/env_var_getter

## Install

`npm install @selfage/env_var_getter`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig ](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides a type-safe way to get environment variables from `process.env`. And another important feautre is that you can only get a variable once, to make sure there is no conflicted/duplicated definition of a variable. Therefore, one should get a variable as early as possible and save it in a global variable for future use.
