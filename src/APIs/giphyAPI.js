import axios from "axios";

const giphyApi = (keyword) => {
  const search = keyword;
  const key = "3I7SF4H11W9QKYB1TMwoUeFyQPG8N7EZ";
  const limit = 30;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  // axiosでリクエストをする
  return axios.get(url);
};

export default giphyApi;
