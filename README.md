<h1 align="center"> <strong> tyblox.js</strong> </h1>

<h2 align="center"> <strong>The most powerful ROBLOX API Wrapper </strong></h2>
<br />
<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/tyblox.js"><img src="https://img.shields.io/npm/v/tyblox.js.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/tyblox.js"><img src="https://img.shields.io/npm/dt/tyblox.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/tyradigital/tyblox.js/actions"><img src="https://github.com/tyradigital/tyblox.js/workflows/Tests/badge.svg" alt="Tests status" /></a>
  </p>
</div>

---

**tyblox.js** is the most powerful [Node.js](https://nodejs.org/) package which allows you to quickly, and easily interact with the Roblox API.

- Object-Oriented
- Performant
- Typescript Capable

## Installation

**Node.js 16.6.0 or newer is required for this to work properly**

**NPM 7.0.0 or newer is required to work properly.**

```sh
$ npm install tyblox.js

$ yarn add tyblox.js
```

**or for development previews, which may be buggy**

```sh
$ npm install tyblox.js@dev
```

---

## Getting started

Below is an example to login and access many features of tyblox.js

```js
require("dotenv").config();
const { Client } = require("tyblox.js");

const client = new Client();

client.on("ready", () => {
  console.log("Ready!");

  console.log("Logged in as " + client.user.username);
});

client.login(process.env.example_cookie);
```
