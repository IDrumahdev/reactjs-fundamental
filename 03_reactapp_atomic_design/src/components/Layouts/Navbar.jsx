import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContact";

const Navbar = () => {
    const username = useLogin();
    const cart = useSelector((state) => state.cart.data);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const [totalCart, setTotalCart] = useState(0);
    const { total } = useTotalPrice();

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

            <Button classname="bg-gray-800 p-2 ml-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>

            <div className="flex items-center bg-gray-800 p-2 px-5 rounded-md ml-5">
                Item : {totalCart} | Total Price : {total.toLocaleString("id-US", {style: 'currency', currency: 'USD'})}
            </div>
            <Button classname="ml-5 bg-black" onClick={HanleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Navbar;