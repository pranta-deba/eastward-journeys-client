import { Link } from "react-router-dom";

const SignIn = () => {
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

    }
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto min-h-[calc(100vh-69.600px)] poppins flex justify-center items-center">
            <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800 shadow-md shadow-green-100">
                <h1 className="text-2xl font-semibold text-green-800">Sign in to your account</h1>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to="/signUp" className="focus:underline hover:underline"> Sign up here</Link>
                </p>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="flex flex-col gap-3">

                        <input id="email" name="email" type="email" placeholder="Email address" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" />

                        <input id="password" name="password" type="text" placeholder="Password" className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" className="checkbox checkbox-success" />
                            <label htmlFor="remember" className="text-xs md:text-sm dark:text-gray-600">Remember me</label>
                        </div>
                        <a className="text-xs md:text-sm dark:text-gray-600">Forgot your password?</a>
                    </div>
                    <input className="w-full cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit" value="Sign In" />
                </form>
                
            </div>
        </div>
    );
};

export default SignIn;