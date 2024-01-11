import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import BlogPosts from "../posts.json";
import { Link } from "react-router-dom";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Blogs() {
  const [blogs, setBlogs] = useState(BlogPosts);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section className="pt-24 pb-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <h2 className="mb-4 text-5xl md:text-6xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">
              Latest from Blog
            </h2>
            <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
              Insights, Trends and Expertise: Dive into our knowledge Hub
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              {blogs.map((blog) => {
                return (
                  <div
                    key={blog.id}
                    className="w-full md:w-auto  border border-gray-200 rounded-xl "
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:h-[250px]">
                      <div className="w-full lg:w-[200px] h-[300px] lg:h-full ">
                        <img
                          className="w-full h-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none "
                          src={`${blog.thumbnail}`}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="md:max-w-xs">
                          <div className="flex flex-col justify-between h-full">
                            <div className="mb-6">
                              <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                                {blog.tag}
                              </p>
                              <Link
                                className="inline-block hover:text-gray-800 hover:underline"
                                to={`/blog/${blog.id}`}
                              >
                                <h3 className="text-xl font-semibold leading-normal">
                                  {blog.title}
                                </h3>
                              </Link>
                            </div>
                            <div className="flex flex-wrap items-center -m-1">
                              <div className="w-auto p-1">
                                <img src="images/blog-avatar.png" alt="" />
                              </div>
                              <div className="w-auto p-1">
                                <p className="text-sm font-semibold leading-relaxed">
                                  {blog.author}
                                </p>
                              </div>
                            </div>
                            <Link
                              to={`/blog/${blog.id}`}
                              className="py-3 px-5 w-fit my-5 text-white font-semibold rounded-xl focus:ring focus:ring-pink-300 bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-200"
                            >
                              Read Blog
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}
