const API_HOST = "https://hn.algolia.com/api/v1/";
const API_MOBILE_NEWS = `${API_HOST}search_by_date?query=mobile`;

const NEWS = "news";
const DELETED = "deletedNews";

export const API_ENDPOINTS = {
  API_MOBILE_NEWS,
};

export const LOCAL_STORAGE = {
  NEWS,
  DELETED,
};
