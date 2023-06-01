import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, Card, CardContent, CardMedia, Chip, Typography,} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import {faker} from "@faker-js/faker";
import Container from "@mui/material/Container";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProduct(productId).then((product) => setProduct(product));
    }, []);

    async function getProduct(id) {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        return await response.json();
    }

    async function deleteProductAPI(id) {
        await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        });
    }

    async function deleteProduct() {
        await deleteProductAPI(productId);
        navigate("/");
    }

    return (
        <>
            <Container maxWidth="xl" sx={{marginTop: "20px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia
                                sx={{minHeight: "300px"}}
                                image={faker.image.urlLoremFlickr({
                                    category: "technics",
                                })}
                                title={product.name}
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
                            <CardContent>
                                <Chip
                                    label={`$${product.price}`}
                                    variant="outlined"
                                    sx={{marginRight: "20px"}}
                                />
                                <Chip
                                    label={product.quantity + " pieces"}
                                    variant="outlined"
                                />
                            </CardContent>
                            <CardActions>
                                <Link to={"/"}>
                                    <Button size="small" variant="outlined">
                                        Back
                                    </Button>
                                </Link>

                                <Link to={`/product-edit/${product.id}`}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        sx={{marginRight: 1}}
                                    >
                                        Edit {product.name}
                                    </Button>
                                </Link>

                                <Button
                                    onClick={deleteProduct}
                                    size="small"
                                    variant="outlined"
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ProductDetails;