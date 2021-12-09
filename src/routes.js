const routes = {
  extentions: {
    v1: {
      users: {
        username_history: "/username-history",
        can_manage: "/canmanage",
      },
      premium: {
        validate_premium: "/validate-membership"
      },
      groups: {
        users: "/users/",
        rolesets: "/roles/"
      }
    },
  },
  v1: {
    users: {
      mobileapi_userinfo: "https://www.roblox.com/mobileapi/userinfo", // Gets detailed user information using a cookie
      get_user_info_id: "https://users.roblox.com/v1/users/", // Gets detailed user information by id OR Gets users by ids.
      get_user_info_name: "https://api.roblox.com/users/get-by-username", // Retrieves user information for the specified username.
      authed: "https://users.roblox.com/v1/users/authenticated", // Gets the minimal authenticated user.
      usernames: "https://users.roblox.com/v1/usernames/users", // Gets users by username - will also check previous usernames.
      block_user: "https://api.roblox.com/userblock/block", // Block a user; prevent communication between the current user and the user specified. [Params: userId]
      unblock_user: "https://api.roblox.com/userblock/unblock", // Unblock a user; allow communication between the current user and the user specified. [Params: userId]
    },
    assets: {
      product_info: "https://api.roblox.com/marketplace/productinfo", // Returns the product info for the specified asset. [Params: assetId]
      gamepass_info:
        "https://api.roblox.com/marketplace/game-pass-product-info", // Returns the product info for the specified game pass. [Params: gamePassId]
      ownership: "https://api.roblox.com/ownership/hasasset", // Checks if a user owns the specified asset. [Params: assetId, userId]
      user_can_manage: "https://api.roblox.com/users/", // Returns whether the user can manage a given asset. [params: assetId, userId]
    },
    premium: {
      validate_premium: "https://premiumfeatures.roblox.com/v1/users/"
    },
    thumbnails: {
      user_avatars: {
        thumbnail: "https://thumbnails.roblox.com/v1/users/avatar",
        bust: "https://thumbnails.roblox.com/v1/users/avatar-bust",
        headshot: "https://thumbnails.roblox.com/v1/users/avatar-headshot",
      }
    },
    groups: {
      group: "https://groups.roblox.com/v1/groups/",
    }
  },
};

module.exports = routes;
