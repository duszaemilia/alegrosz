import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import ProductSearch from "./components/ProductSearch.jsx";
import ProductList from "./components/ProductList.jsx";
import Container from "@mui/material/Container";

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    async function getProducts() {
        const response = await fetch("http://localhost:3000/products");
        return await response.json();
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Alegrosz</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <ProductSearch search={search} setSearch={setSearch}/>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{display: "flex", flexWrap: "wrap", gap: "10px"}}
                    >
                        <ProductList products={products} search={search}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;