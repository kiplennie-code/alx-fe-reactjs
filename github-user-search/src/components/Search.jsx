import { useState } from "react";
import { fetchUserData, advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [singleUser, setSingleUser] = useState(null);
  const [advancedResults, setAdvancedResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // 🔹 BASIC SEARCH
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setSingleUser(null);
    setAdvancedResults([]);

    try {
      const data = await fetchUserData(username);
      setSingleUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 ADVANCED SEARCH
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSingleUser(null);

    try {
      const data = await advancedUserSearch({
        username,
        location,
        minRepos,
        page,
      });

      setAdvancedResults(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Load next page
  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await advancedUserSearch({
      username,
      location,
      minRepos,
      page: nextPage,
    });

    setAdvancedResults((prev) => [...prev, ...data.items]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center">GitHub User Search</h1>

      {/* 🔹 SEARCH FORM */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleAdvancedSearch}>
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded-lg w-full"
        />

        <input
          type="text"
          placeholder="Location (e.g. Kenya)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded-lg w-full"
        />

        <input
          type="number"
          placeholder="Min repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-3 py-2 rounded-lg w-full"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded-lg"
        >
          Advanced Search
        </button>
      </form>

      {/*  BASIC SEARCH BUTTON */}
      <button
        onClick={handleBasicSearch}
        className="w-full bg-gray-700 text-white py-2 rounded-lg"
      >
        Basic Search Only (Username)
      </button>

      {/*  LOADING */}
      {loading && (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      )}

      {/*  ERROR MESSAGE (EXACT REQUIRED TEXT) */}
      {error && !loading && (
        <p className="text-center text-red-500 text-lg">
          Looks like we cant find the user
        </p>
      )}

      {/*  BASIC SEARCH RESULT */}
      {singleUser && (
        <div className="border p-6 rounded-lg shadow text-center">
          <img
            src={singleUser.avatar_url}
            alt={singleUser.login}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{singleUser.name || singleUser.login}</h2>
          <p className="text-gray-600">{singleUser.location}</p>
          <p className="text-gray-600">Repos: {singleUser.public_repos}</p>

          <a
            href={singleUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-3 block"
          >
            View Profile
          </a>
        </div>
      )}

      {/*  ADVANCED SEARCH RESULTS LIST */}
      {advancedResults.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Results: {totalCount} users found
          </h2>

          {advancedResults.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 border p-4 rounded-lg shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />

              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}

          {/* PAGINATION */}
          {advancedResults.length < totalCount && (
            <button
              onClick={loadMore}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
