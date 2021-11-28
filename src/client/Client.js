const { usingCookie } = require("../user/getUser");
const EventEmitter = require("events");

/**
 * The Main Client for **`tyblox.js`** used for running
 */
class Client extends EventEmitter {
  user = null;
  /**
   * Logs the client in, establishing a WebSocket connection to Discord.
   * @param {string} [cookie=this.cookie] The Cookie of the account to log in with
   * @returns {Promise<{STATUS: "OK" | "ERROR", MESSAGE?: string}>} The Cookie of the account used
   * @example
   * client.login('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_');
   */
  async login(cookie = this.cookie) {
    if (!cookie || typeof cookie !== "string")
      throw new Error("INVALID COOKIE ");
    usingCookie(cookie);
  }
}

module.exports = Client;
