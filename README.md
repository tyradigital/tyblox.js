# **tyblox.js**

## **The most powerful ROBLOX API Wrapper**

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
