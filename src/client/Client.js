const getUser = require("../user/getUser");
const EventEmitter = require("events");

/**
 * The Main Client for **`tyblox.js`** used for running any functions needed using the ROBLOX API, mostly involving the ones with cookies.
 * @type {import('../../typings/index').Client}
 */
class Client extends EventEmitter {

  /**
   * The Clients Cookie
   * @type {string | null}
   */
  cookie = null;

  /**
   * The Client's User
   * @type {import('../../typings/index').User | null}
   */
  user = null;
  
  /**
   * Logs the client in, sets the cookie, and confirms that the cookie is valid
   * @param {string} [cookie=this.cookie] The Cookie of the account to log in with
   * @returns {Promise<{STATUS: "OK" | "ERROR", MESSAGE?: string}>} The Cookie of the account used
   * @example
   * ```js
   * require("dotenv").config();
   * const { Client } = require("../src/index");
   *
   * const client = new Client();
   *
   * client.on("ready", () => {
   *    console.log("Ready!")
   *    
   *    console.log("Logged in as " + client.user.username)
   * }) 
   * 
   * client.login('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_');
   * ```
   */
  async login(cookie = this.cookie) {
    this.user = await getUser.usingCookie(cookie, false);
    this.user.cookieValid();
    console.log(this.user)

    this.emit("ready");
  }
}

module.exports = Client;
