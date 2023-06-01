import {Component} from "react";
import {Alert, Button, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";

class EditProduct extends Component {
    state = {
        product: {},
        isMessage: false,
    };

    componentDidMount() {
        this.getProduct(this.props.productId).then((product) => {
            this.setState({product});
        });
    }

    componentDidUpdate() {
        if (this.state.isMessage) {
            setTimeout(() => {
                this.setState({isMessage: false});
            }, 10000);
        }
    }

    async getProduct(id) {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        return await response.json();
    }

    async updateProduct(id, data) {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.updateProduct(this.props.productId, this.state.product);
        this.setState({isMessage: true});
    };

    render() {
        const {product} = this.state;

        return (
            <Container maxWidth="xl" sx={{marginTop: "20px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            Edit Product {product.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.isMessage && (
                            <Alert severity="success">
                                Data has been saved 👌
                            </Alert>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="name"
                                label="Product Name"
                                variant="outlined"
                                fullWidth
                                value={product.name}
                                onChange={(event) => {
                                    this.setState({
                                        product: {
                                            ...product,
                                            name: event.target.value,
                                        },
                                    });
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{marginBottom: "20px"}}
                            />

                            <TextField
                                id="description"
                                label="Product Description"
                                variant="outlined"
                                multiline
                                fullWidth
                                rows={4}
                                value={product.description}
                                onChange={(event) => {
                                    this.setState({
                                        product: {
                                            ...product,
                                            description: event.target.value,
                                        },
                                    });
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{marginBottom: "20px"}}
                            />

                            <TextField
                                id="price"
                                label="Price"
                                variant="outlined"
                                type="number"
                                fullWidth
                                value={product.price}
                                onChange={(event) => {
                                    this.setState({
                                        product: {
                                            ...product,
                                            price: event.target.valueAsNumber,
                                        },
                                    });
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {min: 0.0, step: 0.01},
                                }}
                                sx={{marginBottom: "20px"}}
                            />

                            <TextField
                                id="quantity"
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                fullWidth
                                value={product.quantity}
                                onChange={(event) => {
                                    this.setState({
                                        product: {
                                            ...product,
                                            quantity:
                                            event.target.valueAsNumber,
                                        },
                                    });
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{inputProps: {min: 0}}}
                                sx={{marginBottom: "20px"}}
                            />

                            <Button type="submit" variant="contained">
                                Add Product
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

function EditProductWithID() {
    const {productId} = useParams();

    return <EditProduct productId={productId}/>;
}

export default EditProductWithID;