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

export default function AiSolutionsDraft() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section className="relative py-32 white overflow-hidden">
          {/* <img
            className="hidden absolute bottom-0 right-0"
            src="flaro-assets/images/cta/gradient2.svg"
            alt=""
          /> */}
          <div className="relative z-10 container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="mx-auto "
                  src="images/Untitled-design.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="relative md:max-w-xl">
                  {/* <img
                    className="absolute top-0 right-0"
                    src="flaro-assets/images/cta/gradient3.svg"
                    alt=""
                  /> */}
                  <div className="relative z-10">
                    <h2 className="mb-11 text-5xl md:text-6xl font-bold font-heading tracking-px-n leading-none">
                      Experience AI as your sidekick
                    </h2>
                    <div className="md:max-w-lg">
                      <div className="flex flex-wrap -m-2 mb-3">
                        <div className="w-auto p-2">
                          <svg
                            className="mt-1 "
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={10} cy={10} r={10} fill="#ee226f" />
                            <path
                              d="M6 10.6667L8.66667 13.3333L14 8"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 p-2">
                          <p className="font-medium leading-relaxed">
                            Streamline your data processing workflow with
                            complete data security
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap -m-2 mb-8">
                        <div className="w-auto p-2">
                          <svg
                            className="mt-1"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx={10}
                              cy={10}
                              r={10}
                              fill="#ee226f"
                              className=""
                            />
                            <path
                              d="M6 10.6667L8.66667 13.3333L14 8"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 p-2">
                          <p className="font-medium leading-relaxed">
                            Make data driven decisions with AI with scaleable
                            solutions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 md:max-w-md">
                      <div className="p-1 xl:pl-7 inline-block md:max-w-xl w-full border-2 border-gray-200 rounded-3xl focus-within:ring focus-within:ring-pink-300">
                        <div className="flex flex-wrap items-center">
                          <div className="w-full xl:flex-1">
                            <input
                              className="p-3 xl:p-0 xl:pr-7 w-full text-gray-600 bg-transparent placeholder-gray-600 outline-none"
                              id="cta5-1"
                              type="text"
                              placeholder="Enter your email address"
                              name=""
                            />
                          </div>
                          <div className="w-full xl:w-auto">
                            <div className="block">
                              <button
                                className="py-4 px-5 w-full text-sm text-white uppercase tracking-px font-bold rounded-xl focus:ring focus:ring-pink-300 bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-200"
                                type="button"
                              >
                                GET A DEMO
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="w-auto p-1">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 11.25V12.75M4.5 15.75H13.5C14.3284 15.75 15 15.0784 15 14.25V9.75C15 8.92157 14.3284 8.25 13.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V14.25C3 15.0784 3.67157 15.75 4.5 15.75ZM12 8.25V5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25V8.25H12Z"
                            stroke="#A1A1AA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 p-1">
                        <p className="text-sm text-gray-500 font-medium">
                          We don’t share or sell your email address publicly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24 pb-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <h2 className="text-4xl md:text-5xl  text-center font-bold font-heading tracking-px-n leading-none mx-4 my-8 pb-4">
              AI Superpowers we love
            </h2>
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5ZM20.9874 12.2374C21.6709 11.554 21.6709 10.446 20.9874 9.76256C20.304 9.07915 19.196 9.07915 18.5126 9.76256L12.75 15.5251L10.4874 13.2626C9.80402 12.5791 8.69598 12.5791 8.01256 13.2626C7.32915 13.946 7.32915 15.054 8.01256 15.7374L11.5126 19.2374C12.196 19.9209 13.304 19.9209 13.9874 19.2374L20.9874 12.2374Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 p-1.5">
                      <h3 className="mb-2 text-xl font-semibold tracking-tight">
                        Data Processing:
                      </h3>
                      <p className="tracking-tight">
                        AI Copilot efficiently processes and learns from your
                        data, streamlining your data processing workflow as well
                        as improving access and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5ZM20.9874 12.2374C21.6709 11.554 21.6709 10.446 20.9874 9.76256C20.304 9.07915 19.196 9.07915 18.5126 9.76256L12.75 15.5251L10.4874 13.2626C9.80402 12.5791 8.69598 12.5791 8.01256 13.2626C7.32915 13.946 7.32915 15.054 8.01256 15.7374L11.5126 19.2374C12.196 19.9209 13.304 19.9209 13.9874 19.2374L20.9874 12.2374Z"
                          fill="#ee226f"
                          className=""
                        />
                      </svg>
                    </div>
                    <div className="flex-1 p-1.5">
                      <h3 className="mb-2 text-xl font-semibold tracking-tight">
                        Model Training:
                      </h3>
                      <p className="tracking-tight">
                        Train GPT or PALM models with AI Copilot, from zero-shot
                        to fully custom, while receiving real-time suggestions
                        and tips.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5ZM20.9874 12.2374C21.6709 11.554 21.6709 10.446 20.9874 9.76256C20.304 9.07915 19.196 9.07915 18.5126 9.76256L12.75 15.5251L10.4874 13.2626C9.80402 12.5791 8.69598 12.5791 8.01256 13.2626C7.32915 13.946 7.32915 15.054 8.01256 15.7374L11.5126 19.2374C12.196 19.9209 13.304 19.9209 13.9874 19.2374L20.9874 12.2374Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 p-1.5">
                      <h3 className="mb-2 text-xl font-semibold tracking-tight">
                        System Design:
                      </h3>
                      <p className="tracking-tight">
                        Collaborate with AI Copilot to create a robust system
                        architecture, leveraging its insights and enhancing
                        productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5ZM20.9874 12.2374C21.6709 11.554 21.6709 10.446 20.9874 9.76256C20.304 9.07915 19.196 9.07915 18.5126 9.76256L12.75 15.5251L10.4874 13.2626C9.80402 12.5791 8.69598 12.5791 8.01256 13.2626C7.32915 13.946 7.32915 15.054 8.01256 15.7374L11.5126 19.2374C12.196 19.9209 13.304 19.9209 13.9874 19.2374L20.9874 12.2374Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 p-1.5">
                      <h3 className="mb-2 text-xl font-semibold tracking-tight">
                        Implementation:
                      </h3>
                      <p className="tracking-tight">
                        AI Copilot automates mundane tasks, integrates
                        seamlessly with existing tools, and provides instant
                        suggestions for efficient implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5ZM20.9874 12.2374C21.6709 11.554 21.6709 10.446 20.9874 9.76256C20.304 9.07915 19.196 9.07915 18.5126 9.76256L12.75 15.5251L10.4874 13.2626C9.80402 12.5791 8.69598 12.5791 8.01256 13.2626C7.32915 13.946 7.32915 15.054 8.01256 15.7374L11.5126 19.2374C12.196 19.9209 13.304 19.9209 13.9874 19.2374L20.9874 12.2374Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 p-1.5">
                      <h3 className="mb-2 text-xl font-semibold tracking-tight">
                        Development and Testing:
                      </h3>
                      <p className="tracking-tight">
                        AI Copilot assists in coding, adapts to your style, and
                        aids in manual and automated testing for reliable
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap -m-1.5">
                    <div className="w-auto p-1.5">
                      <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 28.5C22.232 28.5 28.5 22.232 28.5 14.5C28.5 6.76801 22.232 0.5 14.5 0.5C6.76801 0.5 0.5 6.76801 0.5 14.5C0.5 22.232 6.76801 28.5 14.5 28.5ZM20.9874 12.2374C21.6709 11.554 21.6709 10.446 20.9874 9.76256C20.304 9.07915 19.196 9.07915 18.5126 9.76256L12.75 15.5251L10.4874 13.2626C9.80402 12.5791 8.69598 12.5791 8.01256 13.2626C7.32915 13.946 7.32915 15.054 8.01256 15.7374L11.5126 19.2374C12.196 19.9209 13.304 19.9209 13.9874 19.2374L20.9874 12.2374Z"
                          fill="#ee226f"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 p-1.5">
                      <h3 className="mb-2 text-xl font-semibold tracking-tight">
                        Deployment and Maintenance:
                      </h3>
                      <p className="tracking-tight">
                        Deploy future-proof solutions with AI Copilot's
                        cutting-edge technology, and benefit from ongoing
                        maintenance and improvement suggestions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-36 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap xl:items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="transform hover:translate-x-16 transition ease-in-out duration-1000"
                  src="images/Launch-post-PRD-generator-17-04-2.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-auto p-4">
                      <h4 className="text-2xl font-bold dark:text-white my-2">
                        Why Parentheses?
                      </h4>
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="text-lg font-semibold">
                            Team Pedigree:
                          </h3>
                        </div>
                        <div className="w-full p-2">
                          <div className="pb-8 border-b">
                            <p className="text-gray-600 font-medium leading-relaxed">
                              With our team’s varied expertise and experience,
                              we understand the unique needs and challenges that
                              different use cases present. Trust in our team's
                              capabilities to guide you towards AI success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-4">
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="text-lg font-semibold">
                            Partner Ecosystem:
                          </h3>
                        </div>
                        <div className="w-full p-2">
                          <div className="pb-8 border-b">
                            <p className="text-gray-600 font-medium leading-relaxed">
                              By tapping into our extensive Partner network, you
                              gain access to a wide range of resources and
                              expertise that can enhance the capabilities of AI
                              Copilot. Together, we can unlock the full
                              potential of artificial intelligence for your
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-4">
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="text-lg font-semibold">
                            Delivering on Promises:
                          </h3>
                        </div>
                        <div className="w-full p-2">
                          <p className="text-gray-600 font-medium leading-relaxed">
                            At Parentheses, integrity and transparency are at
                            the core of our values. We never make false promises
                            or overhype our capabilities. In fact, if we fail to
                            deliver on our commitments, we offer refunds. Your
                            satisfaction and trust in our AI Copilot solution
                            are of utmost importance to us.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 lg:pb-28 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-24 max-w-xl">
              <h2 className="mb-8 text-4xl md:text-5xl tracking-tighter font-bold">
                Product
              </h2>
              <p className="text-xl tracking-tight">
                Level up your business with our AI-powered add-ons
              </p>
            </div>
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-xs">
                  <img className="mb-6" src="images/smart.png" alt="" />
                  <p className="tracking-tight">
                    AI-Powered Chatbot: Your Precise Q&amp;A Assistant! This
                    AI-powered chatbot is your go-to solution for answering
                    questions from any body of text. With its integration into
                    your platform, you'll experience a smoother user experience
                    and receive quick and precise answers to queries.&nbsp;
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-xs">
                  <img className="mb-6" src="images/database.png" alt="" />
                  <p className="tracking-tight">
                    GPT-4 Insight Engine: Extract Valuable Insights from Textual
                    Data! Unlock the power of the GPT-4 Insight Engine to
                    extract valuable insights from your textual data. Track user
                    behavior, identify trends, and gain a deep understanding of
                    customer feedback for data-driven decision-making. With this
                    integration, you'll have the ability to make informed
                    choices, optimize your strategies, and stay ahead of the
                    competition.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="md:max-w-xs">
                  <img className="mb-6" src="images/monitor.png" alt="" />
                  <p className="tracking-tight">
                    LeadGen Catalyst: Boost Your Brand Identity and Generate
                    Leads! Revitalize your brand identity and attract more leads
                    with the LeadGen Catalyst. This AI-powered solution
                    generates unique and captivating merchandise designs that
                    will captivate your audience. Elevate your marketing
                    efforts, increase brand recognition, and drive conversions
                    with eye-catching designs tailored to your business.
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
