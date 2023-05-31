import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {faker} from "@faker-js/faker";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Unstable_Grid2";

function ProductCard(product) {
    return (
        <Grid key={product.id}>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height: 140}}
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
    );
}


ProductCard.propTypes = {
    product: PropTypes.shape{
        type: {
            id:PropTypes
        }
}
.isRequired,
}
export default ProductCard;