const apiConfig = {
  url: "https://api.themoviedb.org/3",
  api_key: "d203f7245ac3dee1f92fbebd02452ea2",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  poster: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
};
export default apiConfig;
