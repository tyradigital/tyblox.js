require("dotenv").config();
const tyblox = require("../src/index")
const { Client } = require("../src/index");

const client = new Client();

client.on("ready", () => {
    console.log("Ready!")
    
    console.log("Logged in as " + client.user.username)

    client.defaultGroup = 13299030

    console.log(tyblox.getRank())

    tyblox.setRank(client, 445177180, 2)
}) 

client.login(process.env.example_cookie);
