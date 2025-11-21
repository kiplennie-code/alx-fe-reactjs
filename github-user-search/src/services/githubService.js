import axios from 'axios';

/**
 * Fetches user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise} - Promise resolving to user data
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
