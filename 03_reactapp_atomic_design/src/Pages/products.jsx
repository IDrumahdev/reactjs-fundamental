import { Fragment, useEffect, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';
import { getProduct } from '../services/product.service';


const email     = localStorage.getItem('email');
const password  = localStorage.getItem('password');

const Products = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    },[])

    useEffect(() => {
        getProduct((data) => {
            setProducts(data);
        });
    }, [])

    useEffect(() => {
        if(products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            },0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products])

    const HanleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href='/login';
    }

    const HandleAddCart = (id) => {
        if(cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item));
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    }

    return (
        <Fragment>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
                {email}

                <Button classname="ml-5 bg-black" onClick={HanleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className='w-4/6 flex flex-wrap'>
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header Image={product.image}></CardProduct.Header>
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={`${product.price.toLocaleString("id-ID", {style: 'currency', currency: 'IDR'})}`} id={product.id} HandleAddCart={HandleAddCart}/>
                        </CardProduct>
                    ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>
                        Cart
                    </h1>
                    <table className='text-left table-auto border-separate border-spacing-3'>
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
                                        {totalPrice.toLocaleString("id-US", {style: 'currency', currency: 'USD'})}
                                    </strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default Products;