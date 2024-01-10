import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section>
          <div className="overflow-hidden pb-16">
            <div className="container px-4 mx-auto">
              <div className="mb-16 relative bg-indigo-50 overflow-hidden rounded-3xl">
                <img
                  className="absolute left-0 bottom-0"
                  src="images/gradient3.svg"
                  alt=""
                />
                <div className="relative z-20 flex flex-wrap items-end -m-8">
                  <div className="w-full lg:w-1/2 p-20 lg:pr-0 lg:pl-28 lg:py-28">
                    <h2 className="mb-7 text-5xl md:text-6xl  font-bold font-heading tracking-px-n leading-none">
                      Empowering Solutions for the Digital Age
                    </h2>
                    <p className="mb-10 text-lg text-gray-900 font-medium">
                      Elevate Your Business with tailored Apps, Personalized
                      Dashboards, and Intelligent AI Solutions
                    </p>
                    <div className="mb-6 md:inline-block">
                      <Link
                        className="py-4 px-6 w-full text-white font-semibold border border-pink-500 rounded-xl focus:ring focus:ring-pink-300 bg-pink-500 transition ease-in-out duration-200 hover:bg-pink-700"
                        to={"/services"}
                      >
                        Explore solutions
                      </Link>
                    </div>
                    <ul>
                      <li className="inline-flex text-sm text-gray-500 font-medium"></li>
                      <li className="inline-flex text-black px-1"></li>
                      <li className="inline-flex text-sm text-gray-500 font-medium"></li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 p-8">
                    <img src="images/profiles.png" alt="" />
                  </div>
                </div>
              </div>
              {/* <p className="mb-9 text-gray-900 text-center font-medium">
                Our exceptional clientele
              </p> */}
              <div className="flex flex-wrap justify-center items-center -m-8">
                <div className="w-auto ">
                  <a href="https://www.mynemu.com/">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/Untitled-design-14-png-1704436461064.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto ">
                  <a target="_blank" href="https://www.willwali.com/">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/Untitled-design-19-png-1704436432067.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto ">
                  <a target="_blank" href="https://atlancer.ai/">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/Untitled-design-16-png-1704436311129.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto ">
                  <a target="_blank" href="https://app.shipfacts.prativa.io/">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/Untitled-design-17-png-1704436337619.webp"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto ">
                  <a target="_blank" href="https://pearllemon.com/">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/Untitled-design-18-png-1704436370140.webp"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/3 p-8">
                <div className="md:max-w-xs mx-auto text-center">
                  <div className="flex justify-center mb-6 -m-1">
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                        #ee226f#ee226f
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold leading-snug">
                    <span>"Exceptional delivery in short deadlines".</span>
                  </h3>
                  <h3 />
                  <p className="text-gray-600 font-medium">
                    Nandan Pandit, Vixita Solutions
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <div className="md:max-w-xs mx-auto text-center">
                  <div className="flex justify-center mb-6 -m-1">
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold leading-snug">
                    <span>"Helped bring my vision to live".</span>
                  </h3>
                  <h3 />
                  <p className="text-gray-600 font-medium">
                    Divya Adinarayanan, Willwali
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <div className="md:max-w-xs mx-auto text-center">
                  <div className="flex justify-center mb-6 -m-1">
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={24}
                        height={23}
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold leading-snug">
                    <span>"Thoroughly enjoyed working with the team".</span>
                  </h3>
                  <h3 />
                  <p className="text-gray-600 font-medium">
                    Armand Poonawala, Atlancer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24 pb-36 bg-white overflow-hidden">
          <div id="Team">
            <div className="container px-4 mx-auto">
              <h2 className="mb-5 text-4xl md:text-5xl  text-center font-bold font-heading tracking-px-n leading-none">
                Team
              </h2>
              <p className="mb-20 text-lg text-gray-600 text-center font-medium md:max-w-xl mx-auto">
                Meet our dynamic and diverse professionals
              </p>
              <div className="flex flex-wrap max-w-7xl mx-auto -m-3">
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/sourav-png-1704171744043.webp"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full p-2">
                      <div
                        className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
                        style={{ backdropFilter: "blur(3px)" }}
                      >
                        <a href="https://www.linkedin.com/in/souravudo/">
                          <h3 className="mb-1 text-lg text-white font-bold leading-snug">
                            Sourav Das
                          </h3>
                        </a>
                        <p className="text-gray-400 font-medium">
                          Chief of Engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/kusumika-sinha-roy-png-1704171450431.webp"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full p-2">
                      <div
                        className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
                        style={{ backdropFilter: "blur(3px)" }}
                      >
                        <div className="mb-4 pb-3 border-b border-gray-700">
                          <a href="https://www.linkedin.com/in/kusumika-sinha-roy/">
                            <h3 className="mb-1 text-lg text-white font-bold leading-snug">
                              Kusumika Sinha Roy
                            </h3>
                          </a>
                          <p className="text-gray-400 font-medium">
                            Chief of Product and Operations
                          </p>
                        </div>
                        <div className="flex wrap items-center -m-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/sakin.png"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full p-2">
                      <div
                        className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
                        style={{ backdropFilter: "blur(3px)" }}
                      >
                        <h3 className="mb-1 text-lg text-white font-bold leading-snug">
                          Tahjib Al Sakin
                        </h3>
                        <p className="text-gray-400 font-medium">
                          Development Lead
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                    <img
                      className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
                      src="images/Nabantika.png"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full p-2">
                      <div
                        className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
                        style={{ backdropFilter: "blur(3px)" }}
                      >
                        <h3 className="mb-1 text-lg text-white font-bold leading-snug">
                          Nabantika Das
                        </h3>
                        <p className="text-gray-400 font-medium">
                          Product Intern
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-24 pb-36 bg-white overflow-hidden">
          {/* <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            src="images/contact/gradient.svg"
            alt=""
          /> */}
          <div className="relative z-10 container px-4 mx-auto">
            <h2 className="mb-5 text-4xl md:text-5xl  text-center font-bold font-heading tracking-px-n leading-none">
              Get connected
            </h2>
            <p className="mb-20 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
              Reach out to us. We are only a call away.
            </p>
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                  <div className="mb-6 relative mx-auto w-16 h-16 rounded-full bg-pink-500">
                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        width={32}
                        height={33}
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                    Send Email
                  </h3>
                  <p className="font-medium leading-relaxed">
                    hello@parentheses.co.in
                  </p>
                  <p className="font-medium leading-relaxed">
                    support@parentheses.co.in
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                  <div className="mb-6 relative mx-auto w-16 h-16 bg-pink-500 border border-blueGray-200 rounded-full">
                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        width={32}
                        height={33}
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                    Call Us&nbsp;
                  </h3>
                  <p className="font-medium leading-relaxed">+1 8408 412 569</p>
                  <p className="font-medium leading-relaxed">+1 8408 412 569</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-3">
                <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                  <div className="mb-6 relative mx-auto w-16 h-16 bg-pink-500 border border-blueGray-200 rounded-full">
                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        width={32}
                        height={33}
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                    Address
                  </h3>
                  <p className="font-medium max-w-xs mx-auto leading-relaxed">
                    5th Main HSR, layout Sector , Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </>
    </React.Fragment>
  );
}
