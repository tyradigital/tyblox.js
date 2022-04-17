const request = require("../request");
const routes = require("../routes");
const getRolesets = require("./getRolesets")

/**
 * Sets the users rank, leave **groupId** blank if using default one (make sure you set that)
 * @param {import('../../typings/index').Client} client The Main CLient, used for authentication
 * @param {string | number} userId The user id you want to change the rank of
 * @param {number} newRank MUST BE BETWEEN **1** - **255** (255 will most likely not work as it is basically impossible to do this)
 * @param {string | number} [groupId] OPTIONAL - WILL USE DEFAULT IF NOT SPECIFIED - The group id for the user you want to change the rank of
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * const client = new tyblox.Client()
 * 
 * // login here and things
 * 
 * tyblox.setRank(client, 12345, 25, 1234567)
 * ```
 */
module.exports = async (client, userId, newRank, groupId) => {
    if (!client) throw new Error("MISSING CLIENT")
    if (!userId || !newRank) throw new Error("MISSING PARAMS")

    if (newRank > 255 || newRank < 1) throw new Error("INVALID NEW RANK")
    let rolesets = await getRolesets(groupId || client.defaultGroup)

    let rolesetFound = rolesets.data.roles.find((roleset) => {
        return (roleset.rank === newRank)
    })
    if (!rolesetFound) throw new Error("ROLE ID NOT FOUND FOR THIS GROUP")
    console.log(parseInt(rolesetFound.id))

    const req = await request.patch({
        url: `${routes.v1.bases.groupsApi()}${routes.v1.groupMember(groupId || client.defaultGroup, userId)}`,
        cookie: client.cookie,
        token: client.token,
        silenceErr: true,
        body: {
            roleId: parseInt(rolesetFound.id)
        }
    })

    return req.data
}