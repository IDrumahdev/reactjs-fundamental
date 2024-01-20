import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
    const username = useLogin();
    const cart = useSelector((state) => state.cart.data);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    },[cart])

    const HanleLogout = () => {
        localStorage.removeItem('token');
        window.location.href='/login';
    }

    return (
        <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
            {username}
            <div className="flex items-center bg-gray-800 p-2 px-5 rounded-md ml-5">
                {totalCart}
            </div>
            <Button classname="ml-5 bg-black" onClick={HanleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Navbar;