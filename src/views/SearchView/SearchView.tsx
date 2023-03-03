import React, {useState} from "react";
import {data} from "./mock";
import SearchResultItem from "../../components/SearchResultItem/SearchResultItem";
import {SearchResult} from "../../interfaces/search";
import "./SearchView.scss";

const fetchSearchResults = (query: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

const defaultState: SearchResult = {
  items: [],
}

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult>(defaultState);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setResults(defaultState);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const searchResults = await fetchSearchResults(query); // TODO: megcsinálni a rendes kérést
    // @ts-ignore
    setResults(searchResults);
    setLoading(false);
  };

  return {query, loading, results, handleQueryChange, handleSubmit};
};

function SearchView() {
  const {query, loading, results, handleQueryChange, handleSubmit} = useSearch();

  return (
    <div className="searchView">
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleQueryChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="resultsWrapper">
        {loading && <div>Loading...</div>}
        {results.items.length > 0 && (
          <div className="resultsContainer">
            {results.items.map((result) => (
              <SearchResultItem key={result.question_id} result={result}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchView;
