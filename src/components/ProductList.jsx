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
                    <ProductCard
                        magic={42}
                        key={product.id}
                        product={product}
                    />
                ))}
        </>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
};

export default ProductList;