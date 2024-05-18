import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getArticles = async (query, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 15,
      client_id: "QjChZzvQMy7V7KFwb70-Lxc0HII9m00Dt5nu89gmh7o",
    },
  });
  return response.data.results;
};
