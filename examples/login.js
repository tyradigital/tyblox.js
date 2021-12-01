require("dotenv").config();
const { Client } = require("../src/index");

const client = new Client();

client.on("ready", () => {
    console.log("Ready!")
    
    console.log("Logged in as " + client.user.username)
}) 

client.login(process.env.example_cookie);
