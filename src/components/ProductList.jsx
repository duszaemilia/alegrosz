import ProductCard from "./ProductCard.jsx";
import PropTypes from "prop-types";

function ProductList({products, search}) {
    return (

        <>
            {products
                .filter((product) =>
                    `${product.name} ${product.description}`
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((product) => (
                    <ProductCard key={product.id}/>
                ))}
        </>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired
};

export default ProductList;