import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAllProvider from "../hooks/UseAllProvider";
import { ThreeDots } from 'react-loader-spinner'
import { useEffect, useState } from "react";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { getAuth, updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const [googleLoader, setGoogleLoader] = useState(false);
    const [githubLoader, setGithubLoader] = useState(false);
    const [createLoader, setCreateLoader] = useState(false);
    const [passToggle, setPassToggle] = useState(false);
    const [cPassToggle, setCPassToggle] = useState(false);
    const { createUser, googleSignIn, githubSignIn, setAgain, again } = UseAllProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state || "/";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    const handleGoogleSignIn = () => {
        setGoogleLoader(true);
        googleSignIn()
            .then(() => {
                navigate(form);
                setGoogleLoader(false);
            })
            .catch(() => {
                toast.error("Something wrong, please try again!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
                });
                setGoogleLoader(false);
            })
    }
    const handleGithubSignIn = () => {
        setGithubLoader(true);
        githubSignIn()
            .then(() => {
                navigate(form);
                setGithubLoader(false);
            })
            .catch(() => {
                toast.error("Something wrong, please try again!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
                });
                setGithubLoader(false);
            })
    }
    const handleSignUp = e => {
        e.preventDefault();
        setCreateLoader(true);
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cPassword = e.target.cPassword.value;
        const photoURL = e.target.photoURL.value;
        const terms = e.target.terms.checked;
        if (!terms) {
            toast.error("Please accept the terms and conditions!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Bounce
            });
            setCreateLoader(false);
            return;
        } else if (username == "" || email == "" || password == "" || cPassword == "" || photoURL == "") {
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
            setCreateLoader(false);
            return;
        } else if (password !== cPassword) {
            toast.error("Passwords do not match.!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Bounce
            });
            setCreateLoader(false);
            return;
        }
        const doc = {
            username,
            email,
            photoURL
        }
        createUser(email, password)
            .then(() => {
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                    displayName: username, photoURL: photoURL
                }).then(() => {
                    setAgain(!again);
                    fetch('http://localhost:5000/add_user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ...doc, createdAt: auth?.currentUser?.metadata?.createdAt })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success("Registration successfully", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    transition: Flip
                                });
                            }
                        })
                    e.target.reset();
                    setTimeout(() => {
                        setCreateLoader(false);
                        navigate(form);
                    }, 3000);
                }).catch(() => {
                    setCreateLoader(false);
                    navigate(form);
                });
            })
            .catch(() => {
                toast.error("Something wrong, please try again.!", {
                    position: "top-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce
                });
                setCreateLoader(false);
            });


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
        <div className="max-w-[1550px] w-[90%] mx-auto min-h-[calc(100vh-69.600px)] poppins flex flex-col md:flex-row justify-center items-center gap-8">
            <Helmet>
                <title>Eastward - Create Account</title>
            </Helmet>
            <div className="flex-1 flex flex-col w-full  p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800 shadow-md shadow-green-100">
                <h1 className="text-2xl font-semibold text-green-800">Create your account</h1>
                <p className="text-sm text-center dark:text-gray-600">Already account?
                    <Link to="/signIn" className="focus:underline hover:underline"> Sign In</Link>
                </p>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="flex flex-col gap-3">
                        <input id="text" name="username" type="text" placeholder="Username" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" required />

                        <input id="email" name="email" type="email" placeholder="Email address" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" required />

                        <div className="w-full relative">
                            <input id="password" name="password" type={passToggle ? "text" : "password"} placeholder="Password" className="w-full -mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" minLength={6} maxLength={20} required />
                            {!passToggle ? <span onClick={() => setPassToggle(!passToggle)} className="absolute bottom-3 right-1 text-xs cursor-pointer font-light p-2 overflow-hidden">Show</span> :
                                <span onClick={() => setPassToggle(!passToggle)} className="absolute bottom-3 right-1 text-xs cursor-pointer font-light p-2 overflow-hidden">Hide</span>}
                        </div>
                        <div className="w-full relative">
                            <input id="cPassword" name="cPassword" type={cPassToggle ? "text" : "password"} placeholder="Confirm Password" className="w-full -mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" minLength={6} maxLength={20} required />
                            {!cPassToggle ? <span onClick={() => setCPassToggle(!cPassToggle)} className="absolute bottom-3 right-1 text-xs cursor-pointer font-light p-2 overflow-hidden">Show</span> :
                                <span onClick={() => setCPassToggle(!cPassToggle)} className="absolute bottom-3 right-1 text-xs cursor-pointer font-light p-2 overflow-hidden">Hide</span>}
                        </div>



                        <input id="photo" name="photoURL" type="text" placeholder="Photo URL" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-green-800 focus:dark:ring-green-600 focus:dark:border-green-600 focus:ring-2 py-3 border px-2 outline-none" required />

                        <div className="text-start flex items-center gap-2 raleway">
                            <input type="checkbox" name="terms" className="checkbox checkbox-success" required />
                            <span className="label-text">I agree to the <span className="text-green-800 font-semibold">terms and conditions</span></span>
                        </div>
                    </div>
                    <button className="w-full cursor-pointer btn bg-green-800 text-white hover:text-black" type="submit">{createLoader ? loaderComponent : "Create"}</button>
                </form>
            </div>

            <div className="flex-1">
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        {googleLoader ? loaderComponent : <p>Login with Google</p>}
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        {githubLoader ? loaderComponent : <p>Login with GitHub</p>}
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;