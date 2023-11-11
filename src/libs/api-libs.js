export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

// ini misal jika data nya butuh map dua kali
// misal
/* 
    {
      mal_id: '24765-53698',
      entry: [Array],
      ...
    },
    {
      mal_id: '24765-53698',
      entry: [Array],
      ...
    },
    ...

    jadi pada saat nge map muncul diatas, tetapi kita butuh data entry nya. jadi nge map lagi dan terjadi
    twice map. maka dari itu kita buat function dibawah dengan objectProperty sebagai data yg ingin di map lanjutannya
    dan memakai flatmap
*/
export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  // console.log(response);
  return response.data.flatMap((item) => item[objectProperty]);
};

// randomize data
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap
  
  const response = {
    data: data.slice(first, last)
  }

  return response
}
