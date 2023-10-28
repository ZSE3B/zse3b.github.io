import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react"; 

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        
        <AsyncPaginate 
            placeholder = "search for the city (szókaj mjasta)"
            debounceTimeout = {600}
            value={search}
            onChange={handleOnChange}
        />
    );
}

export default Search;