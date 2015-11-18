# Step 1: Basic UI Setup

## Goals

1. basic UI (react)
    * server, renders out WebPack
    * client (WebPack)
    * scripts
        - start Web UI server
    * basic setup (directory structure, npm scripts, babel, webpack)

NOT yet: hot module replacement

```
npm init
npm install --save react react-dom redux react-redux
npm install --save-dev babel webpack babel-loader babel-cli
npm install --save connect serve-static compression

```

## Client/Server (UI) responsibilities
* Server:
    * Perform initial render to full HTML, including SCRIPTs
    * Serve up client resources (static site)
* Client:
    * subsequent actions

A full build thus requires:
1. webpack of the client
2. Babel transpiling of server.js (ES6/7 -> ES5)
    * We can run babel-node (just be [careful](https://github.com/babel/babel/issues/2706))

## Scripts
* Server
    *
* Client


## Notes:
* At time of writing, React HMR not supported in Babel 6.0.0+, so
we're using Babel 5.x

* We don't want webpack-dev-server as we'll be using our own,
to do initial render (i.e. "universal"/"isomorphic").

* In future, we might need to use
[webpack isomorphic tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)



