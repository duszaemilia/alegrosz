import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

function CartProvider({children}) {
    const [cart, setCart] = useState(0);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node,
};

export default CartProvider;