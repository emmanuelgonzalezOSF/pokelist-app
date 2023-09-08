const fetchPokedex = async ({ queryKey }) => {
  const url = queryKey[1];
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`Pokedex Fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPokedex;
