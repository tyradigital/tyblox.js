require("dotenv").config();
const { Client } = require("../src/index");

const client = new Client();

client.on("ready", () => {
  
});

client.login(process.env.example_cookie);
