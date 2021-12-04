const request = require("../../request");
const routes = require("../../routes");

/**
 * Gets the users avatar bust
 * @param {string[] | number[]} [userIds] The User Ids to get the avatar urls.
 * @param {boolean} [circle] If the returned image should be a circle
 * @returns {Promise<string[]>}
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
        baseUrl: `${routes.v1.thumbnails.user_avatars.bust}?format=Png&size=420x420&isCircular=${circle}&userIds=${userIds.join(",")}`,
    })

    return thumbnailData.data
}