import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { footerData } from "../../../utils/data";

export default function Footer() {
  return (
    <footer>
      <div className="py-4 sm:max-w-xl container px-8 sm:px-0 md:px-8 lg:px-8 xl:px-9 w-screen md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1325px] max-w-[1325px]">
        <div className="grid gap-8 lg:gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="https://res.cloudinary.com/dreamtechteam/image/upload/v1657935772/dreambinar-logo_xrye3d.png"
                alt="dreambinar-logo"
                loader={({ src }) => src}
                unoptimized={true}
                width={36}
                height={36}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-lg font-black block">Dreambinar</span>
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            {footerData.map(({ group, links }, index) => (
              <div key={index}>
                <p className="font-semibold tracking-wide text-gray-800">
                  {group}
                </p>

                <ul className="mt-2 space-y-2">
                  {links.map((item, index) => (
                    <li key={index}>
                      {group.toLowerCase() === "our partners" ? (
                        <Link
                          href="https://ummi.ac.id"
                          className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={item?.imgSrc}
                            alt="logo-ummi"
                            loader={({ src }) => src}
                            unoptimized={true}
                            width={item?.width}
                            height={item?.height}
                          />
                        </Link>
                      ) : (
                        <Link
                          href={item.path}
                          className="text-gray-600 transition-colors duration-300 hover:text-green-700"
                          target={item.blank ? "_blank" : ""}
                          referrerPolicy={item.blank ? "no-referrer" : ""}
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-5 md:pb-0 border-t sm:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2022 Dreamtech Team. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-2 sm:mt-0 text-2xl">
            <a
              href="https://github.com/DreamTechTeam"
              className="text-gray-500 transition-colors duration-300 hover:text-green-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
