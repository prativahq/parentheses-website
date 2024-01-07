import React from "react";

export const Contact = () => {
  return (
    <section className="relative py-36 bg-gray-50 overflow-hidden">
      <img
        className="absolute bottom-0 right-0"
        src="images/gradient2.svg"
        alt=""
      />
      <div id="Contact">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-col justify-between h-full">
                <div className=" md:max-w-md block">
                  <a href="https://calendly.com/parentheses/chat-with-a-parentheses-expert">
                    <p className="mb-6 text-sm text-pink-600 font-bold uppercase tracking-px">
                      BOOK A CALL
                    </p>
                  </a>
                  <h2 className="text-4xl md:text-5xl  font-bold font-heading tracking-px-n leading-none">
                    Get a quote for your required services
                  </h2>
                </div>
                <div className="block">
                  <p className="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">
                    Email
                  </p>
                  <ul className="mb-14">
                    <li className="text-xl font-semibold leading-normal">
                      hello@parentheses.co.in
                    </li>
                    <li className="text-xl font-semibold leading-normal">
                      support@parentheses.co.in
                    </li>
                  </ul>
                  <p className="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">
                    Phone
                  </p>
                  <ul>
                    <li className="text-xl font-semibold leading-normal">
                      +1 848 4125 690
                    </li>
                    <li className="text-xl font-semibold leading-normal">
                      +1 848 4125 658
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <form className="px-11 pt-8 pb-12 bg-white bg-opacity-80 md:max-w-xl ml-auto rounded-4xl shadow-12xl">
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Name
                  </p>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2"
                      width={20}
                      height={26}
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      id="contactInput3-1"
                      type="text"
                      placeholder="First & last name"
                    />
                  </div>
                </label>
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Email Address
                  </p>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2"
                      width={20}
                      height={26}
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      id="contactInput3-2"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                </label>
                <label className="block">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Service Needed
                  </p>
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-4"
                      width={20}
                      height={26}
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <textarea
                      className="mb-6 p-4 px-12 w-full h-48 font-medium text-gray-500 outline-none placeholder-gray-500 border border-gray-300 resize-none rounded-lg focus:ring focus:ring-indigo-300"
                      id="contactInput3-3"
                      placeholder="Write message"
                      defaultValue={""}
                    />
                    <div className="md:inline-block">
                      <a href="https://calendly.com/parentheses/chat-with-a-parentheses-expert">
                        <button
                          className="py-4 px-9 w-full text-white font-semibold border border-pink-700 rounded-xl shadow-4xl focus:ring-pink-300 bg-pink-500 transition ease-in-out duration-200"
                          type="button"
                        >
                          Schedule a Call Back
                        </button>
                      </a>
                    </div>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
