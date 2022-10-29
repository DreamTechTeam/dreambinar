import Image from "next/image";
import React from "react";
import Router from "next/router";
import Head from "next/head";

const NotFound = () => {
  const navigateHome = () => {
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>404 - Dreambinar</title>
      </Head>

      <article>
        <div className="flex items-center flex-col justify-center lg:flex-row py-18 px-6 sm:py-10 md:px-24 md:py-20 lg:py-32 lg:px-12 gap-16 lg:gap-28 xl:max-w-[1325px] m-auto">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full md:w-[399px] md:h-[220.5px] lg:w-[558px] lg:h-[389px]">
              <Image
                className="w-auto h-auto"
                src="https://i.ibb.co/v30JLYr/Group-192-2.png"
                alt=""
                loader={({ src }) => src}
                unoptimized={true}
                priority={true}
                width={558}
                height={389}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="py-4 text-3xl lg:text-4xl font-black font-sans text-gray-800">
              Looks like you&apos;ve found the doorway to the great nothing
            </h1>
            <p className="py-4 text-base text-gray-800">
              The content you&apos;re looking for doesn&apos;t exist. Either it
              was removed, or you mistyped the link.
            </p>
            <p className="py-2 text-base text-gray-800">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <button
              onClick={navigateHome}
              className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default NotFound;
