import axios from "./axios";

export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`,
  );
  const anime = await response.json();
  return anime;
};

export const getFanartResponse = async (resource) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_ADMIN_URL}/${resource}`,
  );
  const fanart = await response.json();
  return fanart;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data.flatMap(item => item[objectProperty]);
};

// randomize data
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };
  return response;
};

export const getMangaResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`,
  );
  const manga = await response.json();
  return manga;
};

export const getNestedMangaResponse = async (resource, objectProperty) => {
    const response = await getMangaResponse(resource);
    return await response.data.flatMap(item => item[objectProperty]);
};

export const getDataCheckUser = async (data) => {
    const response = await axios.post("/userPlipPlopCheck", {
      email: data,
    });
    return await response.data.data;
};
