'use strict'

// Internal
exports.internal = {
    /**
     * @type {import('../typings/index').request}
     */
    request: require("./request")
}

// Client/Base Classes (starting classes)
exports.Client = require("./client/Client");

// User Classes
exports.User = require("./user/User");
exports.getUser = require("./user/getUser");

// Thumnail Classes
exports.Avatar = require("./thumbnail/avatar/index")

// Group Classes
exports.getRolesets = require("./group/getRolesets")
exports.getRanks = require("./group/getRanks").getRanks
exports.getGroupRank = require("./group/getRanks").getGroupRank
exports.setRank = require("./group/setRank")