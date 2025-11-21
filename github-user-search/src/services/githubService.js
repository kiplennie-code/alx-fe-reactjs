import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// ⭐ Advanced Search API
export const advancedUserSearch = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const response = await axios.get(
    `${BASE_URL}/search/users?q=${encodeURIComponent(
      query
    )}&page=${page}&per_page=10`
  );

  return response.data;
};
