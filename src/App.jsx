import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    TextField,
    Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { faker } from "@faker-js/faker";

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
                    <TextField
                        id="standard-basic"
                        label="Search Products"
                        variant="standard"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </Grid>

                {products
                    .filter((product) =>
                        `${product.name} ${product.description}`
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((product) => (
                        <Grid key={product.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={faker.image.urlLoremFlickr({
                                        category: "technics",
                                    })}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">See details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </>
    );
}

export default App;