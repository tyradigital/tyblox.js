require("dotenv").config();
const tyblox = require("../src/index")
const { Client } = require("../src/index");

const client = new Client();

client.on("ready", async () => {
    console.log("Ready!")
    
    console.log("Logged in as " + client.user.username)

    client.defaultGroup = 13299030

    const rank = await tyblox.getGroupRank(531761235, 3395411)
    console.log(rank)

    await tyblox.setRank(client, 445177180, 2)
}) 

client.login(process.env.example_cookie);
