import { Button } from "flowbite-react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Layout, { siteTitle } from "../components/Layout";
import EventCard from "../components/ui/EventCard";
import FeatureCard from "../components/ui/FeatureCard";
import OrmawaCard from "../components/ui/OrmawaCard";
import { eventsData, featuresData, ormawaData } from "../utils/data";

const pageTitle: String = `Home | ${siteTitle}`;

export default function Home() {
  const [populate, setPopulate] = useState(0);
  const [isShowedMoreOrmawa, setIsShowedMoreOrmawa] = useState(false);
  const dataOrmawa = isShowedMoreOrmawa ? ormawaData : ormawaData.slice(0, 12);

  const populateMore = () => {
    if (populate > 1) {
      setIsShowedMoreOrmawa(true);
      setPopulate(1);
    }
    setIsShowedMoreOrmawa(true);
    setPopulate(populate + 1);
  };

  const populateLess = () => {
    if (populate < 0) {
      setIsShowedMoreOrmawa(false);
      setPopulate(0);
    }
    setIsShowedMoreOrmawa(false);
    setPopulate(populate - 1);
  };

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div>
        {/* Hero */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="flex flex-wrap flex-col-reverse md:flex-row">
              <div className="w-full self-center px-4 md:w-1/2">
                <h2 className="text-dark font-black font-sans text-2xl md:text-3xl lg:text-[40px] xl:text-[42px] leading-snug mt-2 md:mt-0 lg:leading-tight">
                  Easy to Create <br />
                  And Search Event.
                </h2>
                <p className="mt-2 md:mt-4 text-base md:leading-relaxed lg:text-lg text-gray-800">
                  You can enjoy the feature, create your dream event easily,
                  just fill in the required featuresData and share it with
                  everyone, then you can search for many events that other
                  people have shared and many other features.
                </p>
                <ul className="flex flex-wrap items-center gap-2 md:gap-3 mt-4 md:mt-5 lg:mt-6">
                  <li>
                    <Link
                      href="/events"
                      className="py-3 px-5 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-sm lg:text-lg bg-green-700 hover:bg-opacity-90 font-normal rounded-lg"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className=" py-2.5 px-5 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center  text-green-700  text-sm lg:text-lg border-2 border-green-700 hover:border-green-500 hover:text-green-500 font-bold rounded-lg"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full self-end px-4 md:w-1/2 md:self-center">
                <div className="relative mt-10 md:mt-0">
                  <Image
                    loader={({ src }) => src}
                    className="absolute inset-0 w-full h-full rounded-lg lg:rounded-xl"
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
                    alt="Man using a computer"
                    width={812}
                    height={580}
                    objectFit="cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}

        {/* Stats */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Trusted By Event Organizer
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-2 px-4 py-8 text-center border-2 border-gray-200 rounded-lg">
                  <dt className="order-last text-lg font-medium text-gray-600">
                    Total Events
                  </dt>
                  <dd className="text-4xl md:text-3xl lg:text-4xl font-black font-sans text-green-700">
                    100
                  </dd>
                </div>
                <div className="flex flex-col gap-2 px-4 py-8 text-center border-2 border-gray-200 rounded-lg">
                  <dt className="order-last text-lg font-medium text-gray-600">
                    Active Users
                  </dt>
                  <dd className="text-4xl md:text-3xl lg:text-4xl font-black font-sans text-green-700">
                    86
                  </dd>
                </div>
                <div className="flex flex-col gap-2 px-4 py-8 text-center border-2 border-gray-200 rounded-lg">
                  <dt className="order-last text-lg font-medium text-gray-600">
                    Total Partner
                  </dt>
                  <dd className="text-4xl md:text-3xl lg:text-4xl font-black font-sans text-green-700">
                    24
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        {/* End Stats */}

        {/* Benefits */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Benefits You Get
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              <div className="flex flex-wrap">
                {featuresData.map((item, index) => (
                  <FeatureCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* End Benefits */}

        {/* Events */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Latest Events
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 items-stretch">
                {eventsData.map((item, index) => (
                  <EventCard key={index} {...item} />
                ))}
                {/* grid full 1-3 */}
                <div className="md:col-span-3 lg:col-auto overflow-hidden h-full w-full m-auto flex justify-center items-center mt-2 md:mt-4 lg:mt-0">
                  <Link href="/events">
                    <h1 className="text-lg md:text-xl font-black font-sans text-center mb-2 overflow-hidden text-ellipsis text-gray-800 dark:text-white">
                      Show More <AiOutlineArrowRight className="inline-block" />
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Events */}

        {/* Ormawa */}
        <section className="py-14 md:py-36">
          <div className="container">
            <div className="w-full px-4 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Our Partner
              </h1>
              <p className="text-center text-base lg:text-lg text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="w-full px-4">
              <div className="grid grid-cols-2 gap-4 md:gap-3 lg:gap-4 text-center lg:grid-cols-6">
                {dataOrmawa.map((item, index) => (
                  <OrmawaCard key={index} {...item} />
                ))}
              </div>
              {ormawaData.length > 12 ? (
                <div className="flex mt-6 md:mt-8">
                  <div className="mx-auto">
                    <Button
                      color={"light"}
                      onClick={() =>
                        !isShowedMoreOrmawa ? populateMore() : populateLess()
                      }
                    >
                      <div className="flex flex-col justify-center items-center px-4">
                        {isShowedMoreOrmawa ? "Show Less" : "Show More"}
                        <div className="text-lg">
                          {isShowedMoreOrmawa ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
        {/* End Ormawa */}
      </div>
    </Layout>
  );
}
