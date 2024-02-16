import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Resources() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section class="py-24 bg-blueGray-50 overflow-hidden">
          <div class="container px-4 mx-auto">
            <h1
              class="mb-20 text-5xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-none"
              contenteditable="false"
            >
              Resources
            </h1>
            <div class="md:max-w-6xl mx-auto">
              <div class="flex flex-wrap -m-3.5 mb-10">
                <div class="w-full md:w-1/3 p-3.5">
                  <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                    <div class="relative z-10 flex flex-col justify-between h-full">
                      <div class="mb-24 flex-1">
                        <h3 class="text-xl font-bold" contenteditable="false">
                          RAISING CAPITAL
                        </h3>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.ycombinator.com/documents/"
                          >
                            YC SAFE
                          </a>
                        </p>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.seriesseed.com/"
                          >
                            Series Seed
                          </a>
                        </p>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.pillar.vc/belief/founder-support/term-sheet-grader/"
                          >
                            Term Sheet Grader
                          </a>
                        </p>
                      </div>
                      <div class="flex-1"></div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-3.5">
                  <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                    <div class="relative z-10 flex flex-col justify-between h-full">
                      <div class="mb-24 flex-1">
                        <h3 class="text-xl font-bold">LEGAL</h3>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://carta.com/sg/en/"
                          >
                            Carta
                          </a>
                        </p>
                        <p class="text-gray-500 font-medium text-lg">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.clerky.com/"
                          >
                            Clerky
                          </a>
                        </p>
                        <p class="text-gray-500 font-medium text-lg">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.avodocs.com/#documents"
                          >
                            Avodocs
                          </a>
                        </p>
                      </div>
                      <div class="flex-1"></div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-3.5">
                  <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                    <div class="relative z-10 flex flex-col justify-between h-full">
                      <div class="mb-24 flex-1">
                        <h3 class="text-xl font-bold">FINANCE</h3>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://medium.com/@kenndanielso/shasta-saas-operating-model-7974d49a0c92"
                          >
                            Shasta SaaS Operating Model
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-3.5">
                  <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                    <div class="relative z-10 flex flex-col justify-between h-full">
                      <div class="mb-24 flex-1">
                        <h3 class="text-xl font-bold">HR</h3>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.workrules.net/"
                          >
                            Work Rules
                          </a>
                        </p>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.whatmatters.com/"
                          >
                            OKR
                          </a>
                        </p>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.flexjobs.com/"
                          >
                            FlexJobs
                          </a>
                          <span class="px-2">|</span>
                          <a
                            target="_blank"
                            className="underline"
                            href="https://remote.co/"
                          >
                            Remote.co
                          </a>
                        </p>
                      </div>
                      <div class="flex-1"></div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-3.5">
                  <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl shadow-9xl">
                    <div class="relative z-10 flex flex-col justify-between h-full">
                      <div class="mb-24 flex-1">
                        <h3 class="text-xl font-bold">M&A</h3>
                        <p class="text-lg text-gray-500 font-medium">
                          <a
                            target="_blank"
                            className="underline"
                            href="https://www.atlassian.com/blog/technology/atlassian-term-sheet"
                          >
                            Atlassian Open Term Sheet
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-3.5">
                  <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
                    <div class="relative z-10 flex flex-col justify-between h-full">
                      <div class="mb-24 flex-1">
                        <h3 class="text-xl font-bold">BOOKS</h3>
                        <p class="text-lg text-gray-500 font-heading">
                          <a
                            className="underline"
                            href="http://www.howardlove.com/startup-jcurve/"
                            target="_blank"
                          >
                            Start Up J_Curve
                          </a>
                        </p>
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
