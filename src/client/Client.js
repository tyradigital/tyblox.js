const getUser = require("../user/getUser");
const request = require("../request");
const routes = require("../routes");
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
   * The Clients Validation TOken
   * @type {string | null}
   */
  token = null;

  /**
   * The Clients default set group
   * @type {number | null}
   */
  defaultGroup = null

  /**
   * The Client's User
   * @type {import('../../typings/index').User | null}
   */
  user = null;

  async getToken(cookie = this.cookie) {
    if (!cookie || !this.cookie) throw new Error("NO COOKIE PROVIDED OR FOUND");

    /**
     * @type {import('../../typings/routes').response}
     */
    let tokenReq = await request.post({
      baseUrl: routes.v2.auth.logout,
      cookie: this.cookie,
      silenceErr: true
    })

    this.token = tokenReq.headers["x-csrf-token"]
  }
  
  /**
   * Logs the client in, sets the cookie, and confirms that the cookie is valid
   * @param {string} [cookie=this.cookie] The Cookie of the account to log in with
   * @returns {Promise<{STATUS: "OK" | "ERROR", MESSAGE?: string}>} The Cookie of the account used
   * @example
   * ```js
   * require("dotenv").config();
   * const { Client } = require("tyblox.js");
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
    this.cookie = this.user._cookie

    this.getToken(this.cookie)

    this.emit("ready");
  }
}

module.exports = Client;
