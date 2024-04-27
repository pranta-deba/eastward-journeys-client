import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
    const blogs = useLoaderData();
    const [data, setData] = useState(blogs.slice(0, 5));
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setData(blogs);
        setShowAll(true)
    }
    return (
        <section>
            <div className='p-12 text-center poppins'>
                <h1 className='text-4xl font-bold'>Recent Blogs</h1>
            </div>
            <div className="space-y-8">
                {
                    data.map((blog, idx) => (
                        <div key={idx} className="max-w-[1550px] w-[90%] mx-auto poppins shadow-lg">
                            <div className="dark:bg-gray-100 dark:text-gray-800">
                                <div className="container px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm dark:text-gray-600">{blog.date}</span>
                                        <a className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50">{blog.tag}</a>
                                    </div>
                                    <div className="mt-3">
                                        <a  className="text-2xl font-bold hover:underline">{blog.title}</a>
                                        <p className="mt-2">{blog.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <a className="hover:underline dark:text-violet-600 text-green-900">Read more</a>
                                        <div>
                                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                                <img src={blog.author_image} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                                <span className="hover:underline dark:text-gray-600">{blog.author_name}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
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