import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CirclesWithBar } from "react-loader-spinner";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
    const blogs = useLoaderData();
    const [data, setData] = useState(blogs.slice(0, 5));
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    const handleShowAll = () => {
        setData(blogs);
        setShowAll(true)
    }
    if (!blogs) {
        return (
            <div data-aos="fade-up" className='h-screen flex justify-center items-center'>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    outerCircleColor="#4fa94d"
                    innerCircleColor="#4fa94d"
                    barColor="#4fa94d"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }
    return (
        <section className="max-w-[1550px] w-[90%] mx-auto raleway">
            <Helmet>
                <title>Eastward - Blogs</title>
            </Helmet>
            <div className='p-8 text-center poppins'>
                <h1  data-aos="fade-up" className='text-4xl font-bold'>Recent Blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.map((blog, idx) => (
                        <div  data-aos="fade-up" key={idx} className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={blog.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold tracking-wide">{blog.title}</h2>
                                    <p>{blog.date} by <span className="text-green-800">{blog.author_name}</span></p>
                                    <p className="dark:text-gray-800">{blog.description.slice(0, 80)}....</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 text-green-800">Read more</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center py-12">
                {!showAll && <button onClick={handleShowAll} className="btn bg-green-800 text-white hover:text-black">See More</button>}
            </div>
        </section>
    );
};

export default Blogs;