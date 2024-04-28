import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAllProvider from "../hooks/UseAllProvider";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
    const { signIn } = UseAllProvider();
    const [signInLoader, setSignInLoader] = useState(false);
    const [passToggle, setPassToggle] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state || "/";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    const handleSignIn = e => {
        e.preventDefault();
        setSignInLoader(true);
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email == "" || password == "") {
            toast.error("Input field required.!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Bounce
            });
            setSignInLoader(false);
            return;
        }
        signIn(email, password)
            .then((data) => {
                const lastSignInTime = data?.user?.metadata?.lastSignInTime;
                const doc = { email: data.user.email, lastSignInTime };

                fetch('https://eastward-journeys-server.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(doc)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.modifiedCount > 0) {
                            setSignInLoader(false);
                            navigate(form);
                        } else {
                            setSignInLoader(false);
                            toast.error("Something went wrong.!", {
                                position: "top-left",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                transition: Bounce
                            });
                        }
                    })
            })
            .catch(error => {
                toast.error(error.message.split('(')[1].split(')')[0].split("/")[1] + " please correct email and password.!", {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce
                });
                setSignInLoader(false);
            })
    }
    const loaderComponent = <>
        <ThreeDots
            visible={true}
            height="20"
            width="70"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></>
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto min-h-[calc(100vh-69.600px)] poppins flex justify-center items-center">
            <Helmet>
                <title>Eastward - Login</title>
            </Helmet>
            <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800 shadow-md shadow-green-100">
                <h1 className="text-2xl font-semibold text-green-800">Sign in to your account</h1>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to="/signUp" className="focus:underline hover:underline"> Sign up here</Link>
                </p>
                <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="flex flex-col gap-3 relative">
                        <input id="email" name="email" type="email" placeholder="Email address" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" required />

                        <input id="password" name="password" type={passToggle ? "text" : "password"} placeholder="Password" className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" required minLength={6} maxLength={20} />
                        {!passToggle ? <span onClick={() => setPassToggle(!passToggle)} className="absolute bottom-2 right-1 text-xs cursor-pointer font-light p-2 overflow-hidden">Show</span> :
                            <span onClick={() => setPassToggle(!passToggle)} className="absolute bottom-2 right-1 text-xs cursor-pointer font-light p-2 overflow-hidden">Hide</span>}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" className="checkbox checkbox-success" />
                            <label htmlFor="remember" className="text-xs md:text-sm dark:text-gray-600">Remember me</label>
                        </div>
                        <a className="text-xs md:text-sm dark:text-gray-600">Forgot your password?</a>
                    </div>
                    <button className="w-full cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit">{signInLoader ? loaderComponent : "Sign In"}</button>
                </form>

            </div>

            <ToastContainer />
        </div>
    );
};

export default SignIn;