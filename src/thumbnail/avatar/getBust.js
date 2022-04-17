const request = require("../../request");
const routes = require("../../routes");

/**
 * Gets the users avatar bust
 * @param {string[] | number[]} userIds The User Ids to get the avatar urls.
 * @param {boolean} circle If the returned image should be a circle
 * @returns {Promise<import('../../../typings/routes').v1_thumbnails_users_avatar[]>}
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * 
 * tyblox.Avatar.getBust(['123456', 234567, ...], false);
 * ```
 */
module.exports = async (userIds, circle) => {
    /** 
    * @type {import('../../../typings/routes').v1_thumbnails_user_avatars | null}
    */
    let thumbnailData = await request.get({
        url: `${routes.v1.bases.thumbnailsApi()}${routes.v1.userAvatarBust(userIds, circular, "420x420", "Png")}`
    })

    return thumbnailData.data.data
}