const axios = require('axios').default;

/**
 * Do a `GET` request to an API, usually roblox.
 * @param {import('../typings/index').RequestOptions} [options] The request options.
 * @returns {Promise}
 * @example
 * getUser.usingId('123456');
 */
exports.get = async (options) => {
  if (!options) throw new Error("OPTIONS REQUIRED")
  if (!options.baseUrl) throw new Error("BASE URL REQUIRED")

  let finalUrl =
    options.baseUrl +
    (options.inUrlParam1 || "") +
    (options.extendedUrl || "") +
    (options.inUrlParam2 || "");

  let finalHeaders = {};
  if (options.cookie) finalHeaders.Cookie = `.ROBLOSECURITY=${options.cookie};`;
  if (options.headers) options.headers.forEach((header) => {
    finalHeaders[header.key] = header.value;
  });

  return await axios.get(finalUrl, {
    withCredentials: true,
    headers: finalHeaders,
  }).then((res) => {
    return res.data;
  });
};
