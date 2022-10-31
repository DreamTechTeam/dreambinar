import { Tooltip } from "flowbite-react";
import parse from "html-react-parser";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { RWebShare } from "react-web-share";
import { stripHtml } from "string-strip-html";
import Layout from "../../components/Layout";
import EventCard from "../../components/ui/EventCard";
import styles from "../../styles/EventDetail.module.css";
import { eventDetail, eventsData } from "../../utils/data";
import dateFormatted from "../../utils/dateFormatted";
import isExpired from "../../utils/isExpired";
import moneyFormat from "../../utils/moneyFormat";
import timeToWIB from "../../utils/timeToWIB";

interface eventDetailPropsData {
  id: number;
  title: string;
  description: string;
  url: string;
  eventImages: {
    url: string;
  };
  category: {
    name: string;
  };
  priceType: string;
  price: number;
  location: string;
  dateEvent: string;
  dateEnd: string;
  dateStart: string;
  timeStart: string;
  timeEnd: string;
  user_id: {
    id: number;
    username: string;
    fullName: string;
    profileImg: {
      url: string;
      alternativeText: string;
    };
  };
}

const data: eventDetailPropsData = eventDetail;

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;

  const siteTitle: string = `${data.title} | Dreambinar`;

  const dateEventRange = `${dateFormatted(data.dateStart)} - ${dateFormatted(
    data.dateEnd
  )}`;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={stripHtml(data.description).result} />
        <meta property="og:image" content={encodeURI(data.eventImages.url)} />
        <meta name="og:title" content={data.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>
        {/* Breadcrumbs */}
        <section className="pt-14 md:pt-36">
          <div className="container">
            <div className="w-full px-4 mt-10 md:mt-0">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Link
                        href="/events"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        Events
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-1 text-sm font-medium md:ml-2">
                        {data.title}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}

        {/* Section Event Image and Organizer Start */}
        <section className="mt-4">
          <div className="container">
            <div className="w-full px-4">
              <div className="grid overflow-hidden grid-cols-1 grid-rows-1 lg:gap-9 lg:grid-cols-3 lg:h-full">
                <div
                  style={{
                    backgroundImage: `url(${data.eventImages.url})`,
                    objectFit: "cover",
                  }}
                  className="box lg:col-span-2 rounded-lg bg-center bg-cover h-72 lg:h-full lg:items-stretch"
                ></div>
                <div className="box lg:col-start-3 rounded-lg lg:border-2 lg:border-gray-100">
                  <div className="w-full block mt-4 lg:mt-0 lg:p-4">
                    <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 rounded-lg dark:bg-yellow-200 dark:text-yellow-900 mb-2 max-w-fit">
                      <p className="py-2 px-4">{data.category.name}</p>
                    </div>
                    <p className="text-gray-800 dark:text-white text-xl font-black font-sans mb-5">
                      {data.title}
                    </p>

                    <div className="flex flex-col gap-2 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                          <p className="text-white">
                            <FaCalendarAlt />
                          </p>
                        </div>
                        {isExpired(data.dateEnd) ? (
                          <p className="text-md font-medium items-stretch flex justify-center">
                            Event Expired
                          </p>
                        ) : (
                          <Tooltip content={dateEventRange} placement="bottom">
                            <p className="text-md font-medium items-stretch flex justify-center">
                              {dateFormatted(data.dateStart) ===
                              dateFormatted(data.dateEnd)
                                ? dateFormatted(data.dateStart)
                                : dateEventRange?.length > 27
                                ? `${dateEventRange.slice(0, 27)}...`
                                : dateEventRange}
                            </p>
                          </Tooltip>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                          <p className="text-white">
                            <FaClock />
                          </p>
                        </div>
                        <p className="text-md font-medium items-stretch flex justify-center">
                          {timeToWIB(data.timeStart)} -{" "}
                          {timeToWIB(data.timeEnd)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                          <p className="text-white">
                            <FaMapMarkerAlt />
                          </p>
                        </div>
                        <Tooltip content={data.location} placement="bottom">
                          <p className="text-md font-medium items-stretch flex justify-center capitalize">
                            {data.location?.length > 29
                              ? data.location.substring(0, 29) + "..."
                              : data.location}
                          </p>
                        </Tooltip>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                          <p className="text-white">
                            <FaMoneyBillWave />
                          </p>
                        </div>
                        <p className="text-md font-medium items-stretch flex justify-center">
                          {data.price != 0 ? moneyFormat(data.price) : "Free"}
                          {data.priceType ? ` / ${data.priceType}` : ""}
                        </p>
                      </div>
                    </div>

                    <div>
                      <Link href={`/users/${data.user_id.id}`}>
                        <div className="border-t-2 border-dotted my-3"></div>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              alt={
                                data.user_id.profileImg.url
                                  ? data.user_id.profileImg.alternativeText
                                  : data.user_id.username + " profile"
                              }
                              src={data.user_id.profileImg.url}
                              loader={({ src }) => src}
                              unoptimized={true}
                              sizes="100%"
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <Tooltip
                            content={data.user_id.fullName}
                            placement="bottom"
                          >
                            <p className="text-gray-800 dark:text-white text-sm ml-4">
                              {data.user_id.fullName?.length > 36
                                ? data.user_id.fullName.substring(0, 36) + "..."
                                : data.user_id.fullName}
                            </p>
                          </Tooltip>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Event Image and Organizer End */}

        {/* Section Event Information & Price Start */}
        <section className="mt-8 md:mt-12">
          <div className="container">
            <div className="w-full px-4">
              <div className="grid overflow-hidden grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:gap-9">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-black font-sans underline underline-offset-8 decoration-wavy">
                    Description
                  </h2>
                  <div className="mt-8"></div>
                  <div
                    className={`text-base lg:text-md dark:text-gray-400 ${styles["description-wrapper"]}`}
                  >
                    {parse(data.description)}
                  </div>
                </div>
                <div className="flex flex-col lg:gap-4">
                  <div
                    className={`${
                      isExpired(data.dateEnd) && "hidden"
                    } border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0`}
                  >
                    <div className="w-full block lg:mt-0 p-2 lg:p-4">
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 flex justify-center items-center rounded-lg font-bold font-sans px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                  <div className="border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0">
                    <div className="w-full block lg:mt-0 p-2 lg:p-4">
                      <RWebShare
                        data={{
                          text: "Checkout this event",
                          url: `http://localhost:3000/events/${data.id}`,
                          title: `${data.title}`,
                        }}
                        onClick={() => console.log("shared successfully!")}
                      >
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex w-full justify-center items-center text-center mb-0">
                          Share Events{" "}
                          <i className="text-lg ml-2">
                            <IoShareSocialSharp />
                          </i>
                        </button>
                      </RWebShare>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Event Information & Price End */}

        {/* Spacer */}
        <section className="my-8 md:my-12">
          <div className="container">
            <div className="w-full px-4">
              <div className="border-2 border-gray-200 md:border-gray-100 rounded-lg h-fit"></div>
            </div>
          </div>
        </section>
        {/* End Spacer */}

        {/* Section Event Related Start */}
        <section className="mb-14 md:mb-36">
          <div className="container">
            <div className="w-full px-4">
              <div className="grid">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-black font-sans underline underline-offset-8 decoration-wavy">
                    Maybe you also like
                  </h2>

                  <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 items-stretch py-4">
                    {/* Event List Start */}
                    {eventsData.slice(0, 4).map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                    {/* Event List End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Event Related End */}
      </div>
    </Layout>
  );
}
