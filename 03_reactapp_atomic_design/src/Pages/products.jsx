import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button';

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

    const HanleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href='/login';
    }

    return (
        <Fragment>
            <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
                {email}

                <Button classname="ml-5 bg-black" onClick={HanleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header Image={product.image}></CardProduct.Header>
                        <CardProduct.Body title={product.title}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={`Rp. ${product.price}`} />
                    </CardProduct>
                ))}
            </div>
        </Fragment>
    )
}

export default Products;