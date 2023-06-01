import {Button, Card, CardContent, CardMedia, Chip, Typography,} from "@mui/material";
import {faker} from "@faker-js/faker";
import CardActions from "@mui/material/CardActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ProductCard({product}) {
    return (
        <Card sx={{maxWidth: 345, width: "100%"}}>
            <CardMedia
                sx={{height: 140}}
                image={faker.image.urlLoremFlickr({
                    category: "technics",
                })}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/product-details/${product.id}`}>
                    <Button size="small">See details</Button>
                </Link>
                <Chip
                    label={`$${product.price}`}
                    variant="outlined"
                    sx={{marginRight: "20px"}}
                />
            </CardActions>
        </Card>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;