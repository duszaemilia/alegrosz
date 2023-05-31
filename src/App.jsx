import {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProductSearch from "./components/ProductSearch.jsx";
import ProductList from "./components/ProductList.jsx";

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
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid xs={12}>
                    <h1>Alegrosz</h1>
                </Grid>
                <Grid xs={12}>
                    <ProductSearch search={search} setSearch={setSearch}/>
                </Grid>
                <ProductList products={products} search={search}/>
            </Grid>
        </>
    );
}

export default App;