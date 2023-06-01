import ProductCard from "./ProductCard.jsx";
import PropTypes from "prop-types";

function ProductList({products, search, sortByPrice}) {
    return (
        <>
            {products
                .filter((product) =>
                    `${product.name} ${product.description}`
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .sort((a, b) => {
                    switch (sortByPrice) {
                        case "asc":
                            return a.price - b.price;
                        case "desc":
                            return b.price - a.price;
                        default:
                            return 0;
                    }
                })
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
    sortByPrice: PropTypes.string.isRequired,
};

export default ProductList;