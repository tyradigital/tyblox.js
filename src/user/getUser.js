const User = require("./User");
const request = require("../request");
const routes = require("../routes");

/**
 * Gets information for a user using its user ID - will most likely have limited access (see {@link User.limitedAccess })
 * @param {string} [cookie] The Cookie of the account to log in with
 * @returns {Promise<User>}
 * @example
 * getUser.usingId('123456');
 */
exports.usingId = async () => {};

/**
 * Gets information for a user using its cookie - will most likely NOT have limited access
 * @param {string} [cookie] The Cookie of the account to get information on
 * @returns {Promise<User>}
 * @example
 * getUser.usingCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_');
 */
exports.usingCookie = async (cookie) => {
  request.get(routes.v1.users.mobileapi_userinfo);
};
