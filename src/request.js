const axios = require('axios').default;

/**
 * Do a `GET` request to an API, usually roblox.
 * @param {import('../typings/index').RequestOptions} options The request options.
 * @returns {Promise<any>}
 * @example
 * request.get(...options);
 */
exports.get = async (options) => {
  if (!options) throw new Error("OPTIONS REQUIRED")
  if (!options.url) throw new Error("BASE URL REQUIRED")

  let finalHeaders = {};
  if (options.cookie) finalHeaders.Cookie = `.ROBLOSECURITY=${options.cookie};`;
  if (options.headers) options.headers.forEach((header) => {
    finalHeaders[header.key] = header.value;
  });

  if (options.silenceErr) {
    return await axios.get(options.url, {
      method: "GET",
      withCredentials: true,
      headers: finalHeaders,
    }).catch(() => {
    }).then((res) => {
      return {code: res.status, headers: res.headers, data: res.data};
    });
  } else {
    return await axios.get(options.url, {
      method: "GET",
      withCredentials: true,
      headers: finalHeaders,
    }).catch((err) => {
      throw new Error(`REQUEST ERROR - ${err}`)
    }).then((res) => {
      return {code: res.status, headers: res.headers, data: res.data};
    });
  }
};

/**
 * Do a `POST` request to an API, usually roblox.
 * @param {import('../typings/index').RequestOptions} options The request options.
 * @returns {Promise<any>}
 * @example
 * request.get(...options);
 */
 exports.post = async (options) => {
  if (!options) throw new Error("OPTIONS REQUIRED")
  if (!options.url) throw new Error("BASE URL REQUIRED")

  let finalHeaders = {};
  if (options.cookie) finalHeaders.Cookie = `.ROBLOSECURITY=${options.cookie};`;
  if (options.token) finalHeaders["x-csrf-token"] = options.token
  if (options.headers) options.headers.forEach((header) => {
    finalHeaders[header.key] = header.value;
  });

  if (options.silenceErr) {
    return await axios.post(options.url, options.body || {}, {
      method: "POST",
      withCredentials: true,
      headers: finalHeaders,
    }).catch((err) => {
      return {code: err.response.status, headers: err.response.headers, data: err.response.data};
    }).then((res) => {
      return {code: res.status, headers: res.headers, data: res.data};
    });
  } else {
    return await axios.post(options.url, options.body || {}, {
      method: "POST",
      withCredentials: true,
      headers: finalHeaders,
    }).catch((err) => {
      throw new Error(`REQUEST ERROR - ${err}`)
    }).then((res) => {
      return {code: res.status, headers: res.headers, data: res.data};
    });
  }
};

/**
 * Do a `PATCH` request to an API, usually roblox.
 * @param {import('../typings/index').RequestOptions} options The request options.
 * @returns {Promise<any>}
 * @example
 * request.get(...options);
 */
 exports.patch = async (options) => {
  if (!options) throw new Error("OPTIONS REQUIRED")
  if (!options.url) throw new Error("BASE URL REQUIRED")

  let finalHeaders = {};
  if (options.cookie) finalHeaders.Cookie = `.ROBLOSECURITY=${options.cookie};`;
  if (options.token) finalHeaders["x-csrf-token"] = options.token
  if (options.headers) options.headers.forEach((header) => {
    finalHeaders[header.key] = header.value;
  });

  if (options.silenceErr) {
    return await axios.patch(options.url, JSON.stringify(options.body) || {}, {
      method: "PATCH",
      withCredentials: true,
      headers: finalHeaders,
    }).catch((err) => {
      return {code: err.response.status, headers: err.response.headers, data: err.response.data};
    }).then((res) => {
      return {code: res.status, headers: res.headers, data: res.data};
    });
  } else {
    return await axios.patch(options.url, JSON.stringify(options.body) || {}, {
      method: "PATCH",
      withCredentials: true,
      headers: finalHeaders,
    }).catch((err) => {
      throw new Error(`REQUEST ERROR - ${err}`)
    }).then((res) => {
      return {code: res.status, headers: res.headers, data: res.data};
    });
  }
};
