import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
    
    const {children, title, type} = props;
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);

    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
            <div className='w-full max-w-xs'>

                <button className="absolute top-2 right-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>

                <h1 className='text-3xl font-bold mb-2 text-blue-600'>
                {title}
                </h1>
                <p className='font-medium text-slate-500 mb-8'>
                    Welcome, Please enter your details
                </p>
                {children}
                <p className="text-sm mt-3 text-center text-slate-500">
                    {type === "login" ? "Belum Punya Akun ? " : "Sudah Punya Akun ? "}
                    <Navigation type ={type}/>
                </p>
            </div>
        </div>
    );
};

const Navigation = ({type}) => {
    if(type === "login") {
        return (
            <Link to="/register" className="font-bold text-blue-600">
                Register
            </Link>
        )
    } else {
        return (
            <Link to="/login" className="font-bold text-blue-600">
                Login
            </Link>
        )
    }
}

export default AuthLayouts;