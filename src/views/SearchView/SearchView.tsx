import React, {useState} from "react";
import SearchResultItem from "../../components/SearchResultItem/SearchResultItem";
import {SearchResult} from "../../interfaces/stackExchangeInterface";
import "./SearchView.scss";
import {search} from "../../apiControllers/stackExchangeApi";

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

    search(query).then(resp => {
      setResults(resp);
      setLoading(false);
    }).catch(err => {
      console.error('SearchView.tsx handleSubmit', err);
      setResults(defaultState);
      setLoading(false);
    })
  };

  return {query, loading, results, handleQueryChange, handleSubmit};
};

function SearchView() {
  const {query, loading, results, handleQueryChange, handleSubmit} = useSearch();

  return (
    <div className="searchView">
      <div className="searchWrapper">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input className="searchInput" type="text" value={query} onChange={handleQueryChange}/>
          <button className="submitButton" type="submit">Search</button>
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
