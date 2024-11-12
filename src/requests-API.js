import axios from "axios";

export async function requestHome() {
  const savedQuery = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=ru",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
        accept: "application/json",
      },
    }
  );
  return savedQuery;
}

export async function requestMovies(searchText, page) {
  const savedQuery = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        client_id: "f596add8eda90ab82908f758f22a39bc",
        include_adult: "false",
        query: `${searchText}`,
        language: "ru",
        page: `${page}`,
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
        accept: "application/json",
      },
    }
  );
  return savedQuery;
}

export async function requestMoviesId(id) {
  const savedQuery = await axios.get("https://api.themoviedb.org/3/movie/", {
    params: {
      client_id: "f596add8eda90ab82908f758f22a39bc",
      movie_id: `${id}`,
      language: "ru",
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
      accept: "application/json",
    },
  });
  console.log(savedQuery);
  return savedQuery;
}

export async function requestCast() {
  const savedQuery = await axios.get("https://api.themoviedb.org/3/movie/", {
    params: {
      client_id: "f596add8eda90ab82908f758f22a39bc",
      movie_id: ``,
      language: "ru",
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
      accept: "application/json",
    },
  });
  console.log(savedQuery);
  return savedQuery;
}

export async function requestReviews() {
  const savedQuery = await axios.get("https://api.themoviedb.org/3/movie/", {
    params: {
      client_id: "f596add8eda90ab82908f758f22a39bc",
      movie_id: ``,
      language: "ru",
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
      accept: "application/json",
    },
  });
  console.log(savedQuery);
  return savedQuery;
}
