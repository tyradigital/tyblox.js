const request = require("../../request");
const routes = require("../../routes");

/**
 * Gets the users avatar thumbnail
 * @param {string[] | number[]} [userIds] The User Ids to get the avatar urls.
 * @param {boolean} [circle] If the returned image should be a circle
 * @returns {Promise<import('../../../typings/routes').v1_thumbnails_users_avatar[]>}
 * @example
 * ```js
 * const tyblox = require("tyblox.js")
 * 
 * tyblox.Avatar.getAvatar(['123456', 234567, ...], false);
 * ```
 */
module.exports = async (userIds, circle) => {
    /** 
    * @type {import('../../../typings/routes').v1_thumbnails_user_avatars | null}
    */
    let thumbnailData = await request.get({
        baseUrl: `${routes.v1.thumbnails.user_avatars.thumbnail}?format=Png&size=720x720&isCircular=${circle}&userIds=${userIds.join(",")}`,
    })

    return thumbnailData.data.data
}