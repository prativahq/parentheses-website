import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Blogs() {
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
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-wrap lg:items-center -m-4">
                  <div className="w-auto p-4">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        className="transform hover:scale-105 transition ease-in-out duration-1000"
                        src="images/blog.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="md:max-w-xs">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-6">
                          <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                            AI solutions
                          </p>
                          <a
                            className="inline-block hover:text-gray-800 hover:underline"
                            href="#"
                          >
                            <h3 className="text-xl font-semibold leading-normal">
                              AI ethics: Navigating challenges and building
                              trust
                            </h3>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <img src="images/blog-avatar.png" alt="" />
                          </div>
                          <div className="w-auto p-1">
                            <p className="text-sm font-semibold leading-relaxed">
                              Bhoomika Mehta
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-wrap lg:items-center -m-4">
                  <div className="w-auto p-4">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        className="transform hover:scale-105 transition ease-in-out duration-1000"
                        src="images/blog.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="md:max-w-xs">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-6">
                          <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                            Ecommerce
                          </p>
                          <a
                            className="inline-block hover:text-gray-800 hover:underline"
                            href="#"
                          >
                            <h3 className="text-xl font-semibold leading-normal">
                              Implementing a No-code payment integration for
                              your Ecommerce business
                            </h3>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <img src="images/blog-avatar.png" alt="" />
                          </div>
                          <div className="w-auto p-1">
                            <p className="text-sm font-semibold leading-relaxed">
                              Bhoomika Mehta
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-wrap lg:items-center -m-4">
                  <div className="w-auto p-4">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        className="transform hover:scale-105 transition ease-in-out duration-1000"
                        src="images/blog.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="md:max-w-xs">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-6">
                          <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                            AI SOLUTIONS
                          </p>
                          <a
                            className="inline-block hover:text-gray-800 hover:underline"
                            href="#"
                          >
                            <h3 className="text-xl font-semibold leading-normal">
                              AI to revolutionize CX in 2023
                            </h3>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <img src="images/blog-avatar.png" alt="" />
                          </div>
                          <div className="w-auto p-1">
                            <p className="text-sm font-semibold leading-relaxed">
                              Bhoomika Mehta
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-wrap lg:items-center -m-4">
                  <div className="w-auto p-4">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        className="transform hover:scale-105 transition ease-in-out duration-1000"
                        src="images/blog.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="md:max-w-xs">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-6">
                          <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                            Ecommerce dashboards
                          </p>
                          <a
                            className="inline-block hover:text-gray-800 hover:underline"
                            href="#"
                          >
                            <h3 className="text-xl font-semibold leading-normal">
                              Latest trends in analytics for Ecommerce
                            </h3>
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center -m-1">
                          <div className="w-auto p-1">
                            <img src="images/blog-avatar.png" alt="" />
                          </div>
                          <div className="w-auto p-1">
                            <p className="text-sm font-semibold leading-relaxed">
                              Kusumika Sinha Roy
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}
