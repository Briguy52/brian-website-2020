# React-Static Github Pages Example

This repository shows an example of a basic [react-static](https://github.com/nozzle/react-static) boilerplate application deployed to [Github pages](https://pages.github.com/).

# Install

```
npm install
```

If getting `node-gyp` errors, it's likely that some packages are out of date.

Try these:
```
$ npm install -g npm-check-updates
$ npm-check-updates -u
$ npm install
```

# Run locally

```
npm run start
```

Then visit `localhost:3000`

# Deploy to GitHub pages

Note: we use the `gh-pages` branch to deploy and the `main` branch for development.

When you're ready to deploy, merge `main` into `gh-pages`.

Then run `npm run deploy` in the `gh-pages` branch.