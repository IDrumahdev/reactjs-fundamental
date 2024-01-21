import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContact";

const TableCart = (props) => {

    const {products} = props;
    const cart = useSelector((state) => state.cart.data);
    const {isDarkMode} = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();

    useEffect(() => {
        if(products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            },0);
            dispatch({type: 'UPDATE_TOTAL_PRICE', payload: {total : sum}});
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products])

    return (
        <table className={`text-left table-auto border-separate border-spacing-3 ${isDarkMode && "text-white"}`}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && cart.map((item) => {
                    const product = products.find(product => product.id === item.id);
                    return (
                        <tr key={item.id}>
                            <td>{product.title.substring(0, 10)}...</td>
                            <td>{product.price.toLocaleString("id-US", {style: 'currency', currency: 'USD'})}</td>
                            <td>{item.qty}</td>
                            <td>{(product.price * item.qty).toLocaleString("id-US", {style: 'currency', currency: 'USD'})}</td>
                        </tr>
                    )
                })}

                <tr>
                    <td colSpan={3}>
                        <strong>
                            Total Price
                        </strong>
                    </td>
                    <td>
                        <strong>
                            {total.toLocaleString("id-US", {style: 'currency', currency: 'USD'})}
                        </strong>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart;