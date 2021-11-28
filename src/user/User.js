/**
 * The User Class for **`tyblox.js`** used for getting user details
 */
class User {
  /**
   * If the user has set the account to have limited access to functions when the class was constructed.
   * @type boolean
   * @private
   */
  _initLimited;

  /**
   * The Users cookie, CANNOT be changed once class is initialized. Used for limited
   * @type string
   * @private
   */
  _cookie;

  /**
   * A list of the users previous names, to view it, run the {@link previousNames} method.
   * @type string[]
   * @private
   */
  _previousNames;

  /**
   * The roblox user's roblox avatar url's
   * @type {headshot: string | null, avatarBust: string | null, avatarThumbnail: string | null}
   * @private
   */
  _avatar;

  /**
   * The roblox user's roblox ID
   * @type string
   * @public
   * @readonly
   */
  userId;

  /**
   * The roblox user's roblox username
   * @type string
   * @public
   * @readonly
   */
  username;

  /**
   * The roblox user's roblox display name - to change it (requires limited access - see {@link limitedAccess}) run the {@link changeUsername} method
   * @type string
   * @public
   * @readonly
   */
  displayName;

  /**
   * If the roblox user has premium.
   * @type boolean
   * @public
   * @readonly
   */
  hasPremium;

  /**
   * If the roblox user is banned.
   * @type boolean
   * @public
   * @readonly
   */
  banned;

  /**
   * The roblox user's roblox description
   * @type string
   * @public
   * @readonly
   */
  description;

  /**
   * If the cookie (assuming given) for this roblox user class seems to be valid
   * @type boolean
   * @public
   */
  cookieValid() {
    if (!this._cookie) return false;
  }

  /**
   * If this roblox user class will have limited functions available
   * @returns {boolean}
   * @public
   */
  limitedAccess() {
    if (!this._initLimited || (this._cookie && this.cookieValid())) {
      return true;
    } else return false;
  }

  /**
   * If this roblox user class will have limited functions available
   * @returns {string | false}
   * @public
   */
  avatarUrl(avatarType) {
    if (this._avatar && this._avatar[avatarType]) {
      return this._avatar[avatarType];
    } else return false;
  }

  previousNames() {}

  changeUsername(newUsername) {}

  changeDescription(newDescription) {}
}

module.exports = User;
