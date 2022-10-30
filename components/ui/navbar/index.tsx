import { Button } from "flowbite-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navbarLinks } from "../../../utils/data";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  const [navFixed, setNavFixed] = useState("");
  const navRef = useRef<string | null>(null);
  navRef.current = navFixed;
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setNavFixed("navbar-fixed");
      } else {
        setNavFixed("");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        classes[navFixed] ? classes[navFixed] : ""
      } bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition-all`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4 flex">
            <Image
              loader={({ src }) => src}
              src="https://res.cloudinary.com/dreamtechteam/image/upload/v1657935772/dreambinar-logo_xrye3d.png"
              className="rounded-md"
              alt="Dreambinar Logo"
              width={32}
              height={32}
              objectFit="contain"
              unoptimized={true}
            />
            <Link href="/" className="font-black text-lg block py-6 ml-2">
              Dreambinar
            </Link>
          </div>
          <div className="flex items-center justify-center px-4">
            <Button
              color="light"
              className={`${classes["navbar-burger"]} md:hidden`}
              onClick={() => menuRef.current?.classList.toggle("hidden")}
            >
              <GiHamburgerMenu />
            </Button>

            <nav
              id="nav-menu"
              className={`${
                classes[navFixed] ? "mt-4 md:mt-0" : ""
              } hidden absolute py-5 bg-white shadow-lg rounded-lg w-full right-0 top-full md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none`}
              ref={menuRef}
            >
              <ul className="block md:flex">
                {navbarLinks.map((link, index) => (
                  <li className="group" key={index}>
                    <Link
                      href={link.to}
                      className={`text-base md:text-sm py-2 md:pt-2.5 md:pb-2 mx-8 flex group-hover:text-green-700 md:mx-4 ${
                        router.pathname === link.to
                          ? classes["link-active"]
                          : classes["link-inactive"]
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li className="group">
                  <Link
                    href="/login"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center justify-center mt-2 mx-8 max-w-[100px] md:ml-3 md:mr-0 md:max-w-full md:mt-0"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
