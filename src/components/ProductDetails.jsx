import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {Button, Card, CardContent, CardMedia, Chip, CircularProgress, Typography,} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import {faker} from "@faker-js/faker";
import Container from "@mui/material/Container";
import {CartContext} from "../context/CartContext.jsx";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();
    const {setCart} = useContext(CartContext);

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

    async function updateStock(id, quantity) {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity,
            }),
        });

        return response.json();
    }

    async function buyProduct() {
        setCart((prev) => prev + product.price);
        setProduct({...product, quantity: product.quantity - 1});
        await updateStock(productId, product.quantity - 1);
    }

    if (!Object.keys(product).length) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <CircularProgress color="success"/>
            </div>
        );
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
                                <Button
                                    onClick={buyProduct}
                                    size="small"
                                    variant="outlined"
                                >
                                    Buy
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