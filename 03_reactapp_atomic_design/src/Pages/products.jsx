import { Fragment, useContext, useEffect, useState } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Counter from '../components/Fragments/Counter';
import { getProduct } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';
import { DarkMode } from '../context/DarkMode';


const Products = () => {

    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin();

    useEffect(() => {
        getProduct((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <Fragment>
            <Navbar/>
            <div className={`flex justify-center py-5 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
                <div className='w-4/6 flex flex-wrap'>
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header Image={product.image} id={product.id}></CardProduct.Header>
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={`${product.price.toLocaleString("id-ID", {style: 'currency', currency: 'IDR'})}`} id={product.id}/>
                        </CardProduct>
                    ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>
                        Cart
                    </h1>
                    <TableCart products={products} />
                </div>
            </div>
        </Fragment>
    )
}

export default Products;