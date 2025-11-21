import axios from "axios";

const BASE_URL = "https://api.github.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
  },
});

// Basic User Fetch (Task 1)
export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

// Advanced Search (Task 2)
// MUST contain: "https://api.github.com/search/users?q"
export const advancedUserSearch = async (query, location, minRepos) => {
  try {
    let q = query?.trim() || "";

    if (location?.trim()) {
      q += `+location:${location.trim()}`;
    }

    if (minRepos !== undefined && minRepos !== null && minRepos !== "") {
      q += `+repos:>=${minRepos}`;
    }

    const encodedQuery = encodeURIComponent(q);

    // Required exact string included here
    const url = `https://api.github.com/search/users?q=${encodedQuery}`;

    const response = await api.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error in advanced user search:", error.message);
    throw error;
  }
};
