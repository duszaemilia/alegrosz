import {useState} from "react";

function App() {
    const [products, setProducts] = useState([]);

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}

            </ul>
        </>
);
}

export default App
