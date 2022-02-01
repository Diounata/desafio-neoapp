async function useFetch(path: string) {
  const result = await fetch(path);
  const data = await result.json();

  return data;
}

export { useFetch };
