import { getUrl } from "./createUrl.js";

export function getData() {
  const url = getUrl();
  if (url) {
    return callAPI(url);
  }
  return false;
}

async function callAPI(url) {
  try {
    const response = await fetch(url);
    /* console.log(response); */
    const result = await response.json();
    return validateData(result);
  } catch (error) {
    console.log("me imprimo");
    console.log(error);
  }
}

function validateData(data) {
  if (data.ok) {
    return filterData(data);
  }
  return false;
}

function filterData(data) {
  return {
    code: data.result.code,
    original: data.result.original_link,
    link1: data.result.short_link,
    link2: data.result.short_link2,
    link3: data.result.short_link3,
  };
}
