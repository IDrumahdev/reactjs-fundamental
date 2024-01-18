import { Fragment, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';
import Counter from '../components/Fragments/Counter';

const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        price: 110000,
        image: "/images/product.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Sepatu Bekas",
        price: 120000,
        image: "/images/product.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit consequatur repudiandae beatae architecto."
    },
    {
        id: 3,
        title: "Sepatu KW",
        price: 130000,
        image: "/images/product.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit fugit amet quasi placeat consequatur repudiandae beatae architecto."
    }
]

const email     = localStorage.getItem('email');
const password  = localStorage.getItem('password');

const Products = () => {

    const [Cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    const HanleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href='/login';
    }

    const HandleAddCart = (id) => {
        if(Cart.find((item) => item.id === id)) {
            setCart(Cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item));
        } else {
            setCart([...Cart, {id, qty: 1}]);
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
                    {products.map((product) => (
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
                            {Cart.map((item) => {
                                const product = products.find(product => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{(product.price * item.qty).toLocaleString("id-ID", {style: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='mt-5 flex justify-center mb-5'>
                <Counter></Counter>
            </div>
        </Fragment>
    )
}

export default Products;