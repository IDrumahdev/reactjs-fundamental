import CardProduct from '../components/Fragments/CardProduct';
const Products = () => {

    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header Image="/images/product.jpg"></CardProduct.Header>
                <CardProduct.Body title ="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam impedit fugit amet quasi placeat consequatur repudiandae beatae architecto.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header Image="/images/product.jpg"></CardProduct.Header>
                <CardProduct.Body title ="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam impedit fugit amet quasi placeat consequatur repudiandae beatae architecto.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.000" />
            </CardProduct>
        </div>
    )
}

export default Products;