const Axios = require("axios");
const axios = Axios.default;
const { RequestOptions } = require("../typings/index.d.ts");

/**
 * Do a `GET` request to an API, usually roblox.
 * @param {RequestOptions} [options] The request options.
 * @returns {Promise}
 * @example
 * getUser.usingId('123456');
 */
exports.get = async (options) => {
  let finalUrl =
    options.baseUrl +
    (options.inUrlParam1 || "") +
    (options.extendedUrl || "") +
    (options.inUrlParam2 || "");

  let finalHeaders = {};
  if (options.cookie) finalHeaders.Cookie = options.cookie;
  options.headers.forEach((header) => {
    finalHeaders[header.key] = header.value;
  });

  axios.get(finalUrl, {
    headers: finalHeaders,
  });
};
