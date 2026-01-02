function normalizeURL(urlString) {
  const urlObject = new URL(urlString);

  return `${urlObject.hostname}${urlObject.pathname}`;
}

module.exports = {
  normalizeURL,
};
