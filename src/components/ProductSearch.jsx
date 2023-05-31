import {TextField} from "@mui/material";
import PropTypes from "prop-types";

function ProductSearch({search, setSearch}) {
    return (
        <TextField
            id="standard-basic"
            label="Search Products"
            variant="standard"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    );
}

ProductSearch.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default ProductSearch;