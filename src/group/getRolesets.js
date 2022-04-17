const request = require("../request");
const routes = require("../routes");

/**
 * Get the groups roles in a list
 * @param {string | number} groupId The group id for the rolesets you want to get
 * @returns {import('../../typings/response').v1_groups_rolesets}
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * const client = new tyblox.Client()
 * 
 * // login here and things
 * 
 * tyblox.getRolesets(1234567)
 * ```
 */
module.exports = async (groupId) => {
    if (!groupId) throw new Error("MISSING GROUP ID")

    /** 
    * @type {import('../../typings/response').v1_groups_rolesets | null}
    */
    let rolesets = await request.get({
        url: `${routes.v1.bases.groupsApi()}${routes.v1.getRolesets(groupId)}`
    })

    return rolesets
}