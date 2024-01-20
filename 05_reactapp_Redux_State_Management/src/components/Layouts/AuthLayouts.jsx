import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    
    const {children, title, type} = props;
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-blue-600'>
                {title}
                </h1>
                <p className='font-medium text-slate-500 mb-8'>
                    Welcome, Please enter your details
                </p>
                {children}
                <p className="text-sm mt-3 text-center">
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