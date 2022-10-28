import { Inter } from "@next/font/google";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import classes from "./Navbar.module.css";

const interBlack = Inter({
  weight: "900",
});

const NavbarCustom = () => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarLinks = [
    { to: "/", title: "Home" },
    { to: "/events", title: "Events" },
    { to: "/about", title: "About Us" },
  ];

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center mx-auto">
        <Link href="/" className="flex items-center flex-1" legacyBehavior>
          <Image
            loader={({ src }) => src}
            src="https://res.cloudinary.com/dreamtechteam/image/upload/v1657935772/dreambinar-logo_xrye3d.png"
            className="mr-3 rounded-md"
            alt="Dreambinar Logo"
            width={36}
            height={36}
            unoptimized={true}
          />
          <span
            className={`${interBlack.className} self-center text-gray-800 text-xl font-black whitespace-nowrap dark:text-white`}
          >
            Dream
            <span className="text-green-800 dark:text-white">binar</span>
          </span>
        </Link>
        <div className={classes.navListContainer}>
          <div className={classes.navList}>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {navbarLinks.map(({ to, title }, i) => (
                <li key={i} className="list-none">
                  <Link
                    href={to}
                    className={
                      router.pathname === to
                        ? classes.link_active
                        : classes.link_inactive
                    }
                    legacyBehavior>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/login"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 md:mr-0 text-center  md:order-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Login
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
            onClick={() => menuRef.current?.classList.toggle("hidden")}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:hidden"
          ref={menuRef}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navbarLinks.map(({ to, title }, i) => (
              <li key={i} className="list-none">
                <Link
                  href={to}
                  className={
                    router.pathname === to
                      ? classes.link_active
                      : classes.link_inactive
                  }
                  legacyBehavior>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustom;
