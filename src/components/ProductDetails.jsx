import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const {productId} = useParams();

    useEffect(() => {
        getProduct(productId).then((product) => setProduct(product));
    }, []);

    async function getProduct(id) {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        return await response.json();
    }

    return (
        <div>
            <pre>{JSON.stringify(product, null, 4)}</pre>
        </div>
    );
}

export default ProductDetails;