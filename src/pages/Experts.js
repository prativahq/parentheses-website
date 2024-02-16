import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { ListMusic, Music2, PlayCircle, Radio, User } from "lucide-react";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { GET_ACCOUNT, GET_ALL_ORGANIZATIONS } from "../graphQL/queries";
import { ExpertCard } from "../components/ExpertCard";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Experts() {
  const [platforms, setPlatforms] = useState([""]);
  const [newPlatforms, setNewPlatforms] = useState([""]);
  const [account, setAccount] = useState({});
  //   const { signOut } = useSignOut();
  // const token = useAccessToken();
  // const {data, error, isLoading} = useGetData(
  //   token,
  //   'GetOrganization',
  //   GET_ALL_ORGANIZATIONS,
  // );
  // if (isLoading) return <div>Loading...</div>;

  // console.log(data?.data);

  //   const token = process.env.NEXT_PUBLIC_TOKEN;
  const makeRequest = async (filter) => {
    // console.log(filter);
    // if (!token) return {};
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_HASURA_GRAPHQL_URL,
        {
          query: GET_ALL_ORGANIZATIONS,
          variables: filter,
        },
        {
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      return data?.data?.organization;
    } catch (error) {
      throw error;
    }
  };

  const makeAnotherRequest = async () => {
    // console.log(filter);
    // if (!token) return {};
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_HASURA_GRAPHQL_URL,
        {
          query: GET_ALL_ORGANIZATIONS,
          variables: {},
        },
        {
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      setNewPlatforms([]);

      data?.data?.organization.map(async (platform) => {
        const account = await makeAccountRequest(platform);
        //  setNewPlatforms(platforms => [...platforms, account]);
        setNewPlatforms((prevData) => [
          ...prevData,
          {
            ...platform,
            image: account?.logo,
            description: account?.description,
          },
        ]);
      });

      setPlatforms([...data?.data?.organization]);
      // setNewPlatforms([...data?.data?.organization]);

      return data?.data?.organization;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    makeAnotherRequest();
  }, []);

  // useEffect(() => {
  const makeAccountRequest = async (platform) => {
    // if (!token) return {};
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_HASURA_GRAPHQL_URL,
        {
          query: GET_ACCOUNT,
          variables: {
            _eq: platform?.id,
          },
        },
        {
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data);
      if (data) {
        setAccount(data?.data?.account[0]);
        return data?.data?.account[0];
      }

      // return data
    } catch (error) {
      throw error;
    }
  };

  const filteredData = async (param) => {
    // console.log('parameter', param);
    setNewPlatforms([]);
    // console.log(newPlatforms);
    // console.log(platforms);
    platforms?.map(async (platform) => {
      const account = await makeAccountRequest(platform);
      // console.log(account);
      // console.log(param);
      if (account) {
        if (account?.categories?.includes(param)) {
          // console.log(account);
          const data = await makeRequest({
            filter: {
              id: {
                _eq: account?.org_id,
              },
            },
          });
          // console.log({
          //   ...data[0],
          //   image: account?.cover_img,
          // });

          setNewPlatforms((prevData) => [
            ...prevData,
            {
              ...data[0],
              image: account?.logo,
              description: account?.description,
            },
          ]);
        }
        // } else setNewPlatforms([]);
      }

      // console.log(account);
    });

    // console.log(newPlatforms);
  };

  const partnerFilteredData = async (param) => {
    setNewPlatforms([]);
    platforms?.map(async (platform) => {
      const account = await makeAccountRequest(platform);

      if (param === account?.partner) {
        const data = await makeRequest({
          filter: {
            id: {
              _eq: account?.org_id,
            },
          },
        });
        setNewPlatforms((prevData) => [
          ...prevData,
          {
            ...data[0],
            image: account?.logo,
            description: account?.description,
          },
        ]);
      }
    });
  };

  const industries = [
    "Articles and Blog Posts",
    "Technical Writing",
    "Desktop Software Development",
    "UI/UX Design",
    "Logo Design and Branding",
    "Social Media Marketing",
    "Project Management",
    "SEO",
    "Tax Consulting",
    "Accounting",
    "Chips and Circuit Design",
    "Bioengineering",
    "Microfluidics",
    "Technology Law",
    "Contract Law",
    "CRM Implementation",
    "Web Development",
    "Mobile Apps",
    "Artificial Intelligence",
    "Ecommerce",
    "Low Code",
    "Business Intelligence",
  ];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <div className="flex flex-col min-h-[100vh]">
        <Navbar />
        <section className="flex-1">
          <div className="container px-4 mx-auto">
            <div className="bg-background">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/4">
                  <div className=" py-4">
                    <div className="px-4 ">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            <h2 className=" px-2  text-lg font-semibold tracking-tight">
                              All
                            </h2>
                          </AccordionTrigger>
                          <AccordionContent>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start  border-b-5 border-sky-500"
                              onClick={() => makeAnotherRequest()}
                            >
                              <Radio className="mr-2 h-4 w-4" />
                              All
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            <h2 className=" px-2 text-lg font-semibold tracking-tight">
                              Industry
                            </h2>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-1 h-40 overflow-y-auto">
                              {industries.map((industry) => {
                                return (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start"
                                    onClick={() => filteredData(`${industry}`)}
                                  >
                                    <PlayCircle className="mr-2 h-4 w-4" />
                                    {industry}
                                  </Button>
                                );
                              })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="px-4 ">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            {" "}
                            <h2 className=" px-2 text-lg font-semibold tracking-tight">
                              Partner type
                            </h2>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start"
                                onClick={() =>
                                  partnerFilteredData("Industry expert")
                                }
                              >
                                <ListMusic className="mr-2 h-4 w-4" />
                                Industry expert
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start"
                                onClick={() =>
                                  partnerFilteredData("Technology partner")
                                }
                              >
                                <Music2 className="mr-2 h-4 w-4" />
                                Technology partner
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start"
                                onClick={() =>
                                  partnerFilteredData("Agency partner")
                                }
                              >
                                <User className="mr-2 h-4 w-4" />
                                Agency partner
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-3/4 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">
                    {/* <Separator className="my-4" /> */}
                    <div className="relative">
                      <ScrollArea>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 pb-4 justify-center">
                          {newPlatforms?.map((platform) => (
                            // makeAccountRequest(album)
                            <ExpertCard
                              key={platform?.id}
                              platform={platform}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation="vertical" />
                      </ScrollArea>
                    </div>

                    <Separator className="my-4" />
                    {/* </TabsContent> */}
                    {/* </Tabs> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}
