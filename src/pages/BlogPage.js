import React from "react";
import { Navbar } from "../components/Navbar";
import Blogs from "../posts.json";
import Markdown from "react-markdown";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
export const BlogPage = () => {
  const { id } = useParams();
  const blog = Blogs.filter((blog) => blog.id === Number(id));
  return (
    <div>
      <Navbar />
      <section className="relative py-24 ">
        <div className="container relative z-10 px-4 mx-auto">
          {/* <Link className="w-fit mb-5" to={"/blog"}>
              <div className="bg-white p-5 w-fit rounded-md shadow-md ">
                <ChevronLeft className="text-emerald-500" />
              </div>
            </Link> */}
          <div className="flex flex-wrap justify-center gap-20 ">
            <img
              loading="lazy"
              alt=""
              className="w-full rounded-xl md:w-1/3"
              src={`${blog[0].thumbnail}`}
            />
            <div className="flex flex-col gap-5 w-full lg:w-1/2">
              <div className="flex gap-3">
                <p className="text-lg text-gray-500">{blog[0].author}</p>.
                <p className="text-lg text-gray-500">{blog[0].date}</p>
              </div>

              <h1 className="mb-2 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-medium font-heading tracking-tighter">
                {blog[0].title}
              </h1>
              <div className="mb-2 ">
                <span className="inline-block py-1 px-3 text-xs leading-5 text-emerald-500 hover:text-emerald-600 font-medium uppercase bg-emerald-100 hover:bg-emerald-200 rounded-full shadow-sm">
                  {blog[0].tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 relative py-20 bg-white">
        <Markdown
          className={"px-5 lg:w-3/4 w-full text-coolGray-800 text-lg mx-auto"}
        >
          {blog[0].content}
        </Markdown>
      </section>
      <Footer />
    </div>
  );
};
