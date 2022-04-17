const request = require("../request");
const routes = require("../routes");

/**
 * Get the users group ranks
 * @param {string | number} [userId] The user id you want to find the rank for
 * @returns {import('../../typings/routes').v2_groups_ranks}
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * const client = new tyblox.Client()
 * 
 * // login here and things
 * 
 * tyblox.getRanks(12345)
 * ```
 */
 exports.getRanks = async (userId) => {
    if (!userId) throw new Error("MISSING GROUP ID")

    /** 
    * @type {import('../../typings/routes').v2_groups_ranks | null}
    */
    let rolesets = await request.get({
        url: `${routes.v1.bases.groupsApi()}${routes.global.getUserRanks(userId)}`
    })

    return rolesets.data
}

/**
 * Get the users rank in a group
 * @param {string | number} [userId] The user id you want to find the rank for
 * @param {string | number} [groupId] The group id for the rolesets you want to get
 * @returns {number | null}
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * const client = new tyblox.Client()
 * 
 * // login here and things
 * 
 * tyblox.getGroupRank(12345, 1234567)
 * ```
 */
exports.getGroupRank = async (userId, groupId) => {
    if (!userId) throw new Error("MISSING GROUP ID")
    if (!groupId) throw new Error("MISSING GROUP ID")

    /** 
    * @type {import('../../typings/routes').v2_groups_ranks | null}
    */
    let ranks = await request.get({
        url: `${routes.v1.bases.groupsApi()}${routes.global.getUserRanks(userId)}`,
        silenceErr: false
    })

    if (!ranks.data || ranks.data.length === 0) return null;

    const rankWithGroupIdFound = ranks.data.find((group) => group.group.id === groupId);

    if (rankWithGroupIdFound) return rankWithGroupIdFound.role.rank;
    return 0;
}