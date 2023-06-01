import {Component} from "react";
import {Button, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";

class EditProduct extends Component {


    componentDidMount() {
        this.getProduct(this.props.productId).then((product) => {
            this.setState({product});
        });
    }

    async getProduct(id) {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        return await response.json();
    }

    render() {
        const {
            product: {id, name, description, price, quantity},
        } = this.state;

        return (
            <Container maxWidth="xl" sx={{marginTop: "20px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            Edit Product {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={() => {
                        }}>
                            <TextField
                                id="name"
                                label="Product Name"
                                variant="outlined"
                                fullWidth
                                sx={{marginBottom: "20px"}}
                            />

                            <TextField
                                id="description"
                                label="Product Description"
                                variant="outlined"
                                multiline
                                fullWidth
                                rows={4}
                                sx={{marginBottom: "20px"}}
                            />

                            <TextField
                                id="price"
                                label="Price"
                                variant="outlined"
                                type="number"
                                min="0"
                                fullWidth
                                InputProps={{inputProps: {min: 0}}}
                                sx={{marginBottom: "20px"}}
                            />

                            <TextField
                                id="quantity"
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                fullWidth
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