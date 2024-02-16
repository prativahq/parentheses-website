import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Services() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section className="pt-24 pb-40 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <h1 className="mb-20 text-5xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-none">
              Develop Apps <br></br>tailored to your vision
            </h1>
            <div className="flex flex-wrap -m-16 md:-m-3">
              <div className="w-full md:w-1/3 p-16 md:p-3">
                <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl">
                  <h3 className="mb-3 text-xl font-bold font-heading leading-normal">
                    Product Expertise
                  </h3>
                  <p className="mb-10 text-gray-600 font-medium leading-relaxed">
                    Seasoned Product Team to transform your ideas to product
                  </p>
                  <img
                    className="mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000"
                    src="images/peoples.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 p-16 md:p-3">
                <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl">
                  <h3 className="mb-3 text-xl font-bold font-heading leading-normal">
                    Integrations
                  </h3>
                  <p className="mb-10 text-gray-600 font-medium leading-relaxed">
                    Seamless Integration Solutions Tailored to Your App's Unique
                    Needs&nbsp;
                  </p>
                  <img
                    className="mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000"
                    src="images/standard-quality-control-collage-concept-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 p-16 md:p-3">
                <div className="px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl">
                  <h3 className="mb-3 text-xl font-bold font-heading leading-normal">
                    Innovative designs
                  </h3>
                  <p className="mb-10 text-gray-600 font-medium leading-relaxed">
                    Crafting innovative designs to bring out the best user
                    experience
                  </p>
                  <img
                    className="mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000"
                    src="images/5781555-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24 pb-28 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <h2 className="mb-7 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-none">
              Dashboards to drive performance
            </h2>
            <p className="mb-14 text-lg text-gray-600 font-medium text-center mx-auto md:max-w-2xl">
              Business insights for E-commerce and Logistics business
            </p>
            <div className="flex justify-center">
              <div className="inline-block">
                <img
                  className="mb-11 mx-auto transform hover:translate-y-3 transition ease-in-out duration-1000"
                  src="images/data.png"
                  alt=""
                />
                <ul className="flex flex-wrap justify-center -m-8">
                  <li className="w-auto p-8">
                    <a
                      className="text-sm text-pink-600 hover:text-pink-700 font-semibold uppercase tracking-px"
                      href="#"
                    >
                      REAL-TIME &amp; PREDICTIVE ANALYTICS
                    </a>
                  </li>
                  <li className="w-auto p-8">
                    <a
                      className="text-sm text-pink-400 hover:text-pink-500 font-semibold uppercase tracking-px"
                      href="#"
                    >
                      DATA FEDERATION
                    </a>
                  </li>
                  <li className="w-auto p-8">
                    <a
                      className="text-sm text-pink-400 hover:text-pink-500 font-semibold uppercase tracking-px"
                      href="#"
                    >
                      ALERTS AND NOTIFICATIONS
                    </a>
                  </li>
                  <li className="w-auto p-8">
                    <a
                      className="text-sm text-pink-400 hover:text-pink-500 font-semibold uppercase tracking-px"
                      href="#"
                    >
                      CLOUD SERVERS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-28 pb-36 bg-white overflow-hidden">
          <div className="relative z-10 container px-4 mx-auto">
            <h2 className="mb-6 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-none md:max-w-xl mx-auto text-center">
              Customize your plan
            </h2>
            <p className="mb-20 text-lg text-gray-900 text-center font-medium leading-normal md:max-w-lg mx-auto">
              Flexible pricing tailored for your needs
            </p>
            <div className="md:max-w-4xl mx-auto">
              <div className="flex flex-wrap -m-5">
                <div className="w-full md:w-1/2 p-5 h-full ease-in-out object-cover transform hover:scale-105 duration-1000 transition">
                  <div
                    className="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl"
                    style={{ backdropFilter: "blur(46px)" }}
                  >
                    <div className="border-b border-blueGray-100">
                      <div className="py-7 px-9">
                        <h3 className="mb-3 text-xl text-gray-900 font-bold leading-snug">
                          Project Based Pricing
                        </h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                          Select any service from the following list
                        </p>
                      </div>
                    </div>
                    <div className="pt-8 pb-9 px-9">
                      <p className="mb-6 text-gray-600 font-medium leading-relaxed">
                        Features included:
                      </p>
                      <ul className="mb-11 py-6">
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Dedicated product and QA teams
                          </p>
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Dedicated UI/UX design team
                          </p>
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Web + iOS+ android development
                          </p>
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Customized website / dashboards
                          </p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Branding and SEO
                          </p>
                        </li>
                      </ul>
                      <p className="mb-6 text-xl text-gray-500 font-semibold leading-normal">
                        <span />
                        <span className="text-gray-900" />
                      </p>
                      <div className="md:inline-block">
                        <a
                          href="#Contact"
                          className="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-ping-300 bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-200"
                        >
                          <button type="button">Get a quotation</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-5 h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000">
                  <div
                    className="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl"
                    style={{ backdropFilter: "blur(46px)" }}
                  >
                    <div className="border-b border-blueGray-100">
                      <div className="py-7 px-9">
                        <h3 className="mb-3 text-xl text-gray-900 font-bold leading-snug">
                          Dedicated Team
                        </h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                          One stop shop for all your IT needs
                        </p>
                      </div>
                    </div>
                    <div className="pt-8 pb-9 px-9">
                      <p className="mb-6 text-gray-600 font-medium leading-relaxed">
                        Features included:
                      </p>
                      <ul className="mb-11">
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Dedicated product team for research and ideation
                          </p>
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Dedicated UI/UX designers, Branding and SEO teams
                          </p>
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Web +iOS+ android development
                          </p>
                        </li>
                        <li className="mb-4 flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            Customized website and dashboards
                          </p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="font-semibold leading-normal">
                            1 year of premium support
                          </p>
                        </li>
                      </ul>
                      <p className="text-xl text-gray-500 font-semibold leading-normal">
                        <span />
                        <span className="text-gray-900" />
                      </p>
                      <div className="md:inline-block">
                        <a
                          href="#Contact"
                          className="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-ping-300 bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-200"
                        >
                          <button type="button">Get a quotation</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full py-64  p-6" />
        </section>
        <Contact />
        <Footer />
      </>
    </React.Fragment>
  );
}
