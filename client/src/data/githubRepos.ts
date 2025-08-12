import axios from "axios";

const getRepos = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/github`);
  return data;
};

export const repos = await getRepos();
