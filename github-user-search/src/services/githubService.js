import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL || 'https://api.github.com';
const API_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

// Create axios instance with default config
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: API_TOKEN ? {
    'Authorization': `token ${API_TOKEN}`
  } : {}
});

/**
 * Search for GitHub users
 * @param {string} username - GitHub username to search
 * @returns {Promise} User data
 */
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching users');
  }
};

/**
 * Get detailed user information
 * @param {string} username - GitHub username
 * @returns {Promise} Detailed user data
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching user details');
  }
};

/**
 * Advanced search with filters
 * @param {Object} params - Search parameters
 * @returns {Promise} Search results
 */
export const advancedSearch = async ({ username, location, minRepos }) => {
  try {
    let query = username || '';
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
    
    const response = await githubAPI.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error performing advanced search');
  }
};

export default githubAPI;
