function buildUrl(link) {
  return `https://api.shrtco.de/v2/shorten?url=${link}`;
}

function getlink() {
  return document.querySelector("#inputText").value;
}

export function getUrl() {
  const link = getlink();
  if (link) {
    return buildUrl(link);
  }
  return false;
}
