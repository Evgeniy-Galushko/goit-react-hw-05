import axios from "axios";

export async function requestHome() {
  const savedQuery = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
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
        language: "en-US",
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
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?`,
    {
      params: {
        language: "en-US",
        client_id: "f596add8eda90ab82908f758f22a39bc",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
        accept: "application/json",
      },
    }
  );
  return data;
}

export async function requestCast(id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?`,
    {
      params: {
        language: "en-US",
        client_id: "f596add8eda90ab82908f758f22a39bc",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
        accept: "application/json",
      },
    }
  );

  return data;
}

export async function requestReviews(id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        language: "en-US",
        client_id: "f596add8eda90ab82908f758f22a39bc",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk2YWRkOGVkYTkwYWI4MjkwOGY3NThmMjJhMzliYyIsIm5iZiI6MTczMTA4OTczNy45MjQ5MTc1LCJzdWIiOiI2NzJlNTFiNmYwOTI3YWNkZTBkMWM5Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W9suki6imrjDbtuCBdOyqxhQrIrn6x1y6BqZkly9lRw",
        accept: "application/json",
      },
    }
  );
  console.log(data);
  return data;
}
