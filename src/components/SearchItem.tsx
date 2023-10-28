type SearchItemProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchItem = ({ search, setSearch }: SearchItemProps) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
export default SearchItem;
