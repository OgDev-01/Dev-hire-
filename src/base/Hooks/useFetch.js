export async function useFetch({ endpoint }) {
  

  const response = await axios.get(`${baseUrl}/${endpoint}`);

  return response;
}
