const request = require("../../request");
const routes = require("../../routes");

/**
 * Gets the users avatar thumbnail
 * @param {string[] | number[]} userIds The User Ids to get the avatar urls.
 * @param {boolean} circle If the returned image should be a circle
 * @returns {Promise<import('../../../typings/response').v1_thumbnails_users_avatar[]>}
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * 
 * tyblox.Avatar.getAvatar(['123456', 234567, ...], false);
 * ```
 */
module.exports = async (userIds, circular) => {
    /** 
    * @type {import('../../../typings/response').v1_thumbnails_user_avatars | null}
    */
    let thumbnailData = await request.get({
        url: `${routes.v1.bases.thumbnailsApi()}${routes.v1.userAvatarThumbnail(userIds, circular, "720x720", "Png")}`
    })

    return thumbnailData.data.data
}