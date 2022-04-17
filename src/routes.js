const routes = {
  global: {
    bases: {
      /**
       * The base API for Roblox, limited functionality
       * 
       * @returns {"https://api.roblox.com"}
       */
       api: () => "https://api.roblox.com"
    },

    /**
     * The asset versions route
     * 
     * @param {string} [id] The specified asset ID
     * @returns {`/assets/${id}/versions`}
     */
     getAssetVersion: (id) => `/assets/${id}/versions`,

     /**
     * Current currency (Robux) balance Route
     * 
     * @returns {"currency/balance/"}
     */
    currencyBalance: () => "/currency/balance/",

    /**
     * The user friends route
     * 
     * @param {string} userId 
     * @returns {`/users/${userId}/friends`}
     */
    userFriends: (userId) => `/users/${userId}/friends`,

    /**
     * The incoming friend counts route
     * 
     * @returns {"/incoming-items/counts"}
     */
    incomingFriends: () => "/incoming-items/counts",

    /**
     * User Group Ranks route
     * 
     * @param {string} userId 
     * @returns {`/users/${userId}/groups/roles`}
     */
     getUserRanks: (userId) => `/users/${userId}/groups/roles`
  },
  v1: {
    bases: {
      /**
       * The Roblox Mobile API
       * 
       * @returns {"https://www.roblox.com/mobileapi"}
       */
      mobileApi: () => "https://www.roblox.com/mobileapi",

      /**
       * The Roblox Users API
       * 
       * @returns {"https://users.roblox.com/v1"}
       */
      usersApi: () => "https://users.roblox.com/v1",

      /**
       * The Premium / Premium Features API
       * 
       * @returns {"https://premiumfeatures.roblox.com/v1"}
       */
      premiumFeaturesApi: () => "https://premiumfeatures.roblox.com/v1",

      /**
       * The Thumbnails API
       * 
       * @returns {"https://thumbnails.roblox.com/v1"}
       */
      thumbnailsApi: () => "https://thumbnails.roblox.com/v1",

      /**
       * The Groups API
       * 
       * @returns {"https://groups.roblox.com/v1"}
       */
      groupsApi: () => "https://groups.roblox.com/v1"
    },

    /**
     * A groups current roleset route
     * 
     * @param {string} groupId 
     * @returns {`/groups/${groupId}/roles`}
     */
    getRolesets: (groupId) => `/groups/${groupId}/roles`
  },
  v2: {
    bases: {
      /**
       * The base API for Roblox, limited functionality
       * 
       * @returns {"https://api.roblox.com/v2"}
       */
       api: () => "https://api.roblox.com/v2", 

      /**
       * The Auth API
       * 
       * @returns {"https://auth.roblox.com/v2"}
       */
      authApi: () => "https://auth.roblox.com/v2"
    },
    
    /**
     * Auth logout route
     * 
     * @returns {"/logout"}
     */
    logout: () => "/logout",
  }
};

module.exports = routes;
