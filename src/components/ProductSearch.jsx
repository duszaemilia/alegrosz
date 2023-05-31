import {TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


function ProductSearch({search, setSearch}) {
    return (
        <Grid xs={12}>
            <TextField
                id="standard-basic"
                label="Search Products"
                variant="standard"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </Grid>
    );
}

ProductSearch.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired
}

export default ProductSearch;