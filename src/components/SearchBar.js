function SearchBar({ searchTerm, handleSearch }) {
    return (
        <div>
            Search
            <input type="text" value={searchTerm} onChange={handleSearch} />
        </div>
    );
}
export default SearchBar;
