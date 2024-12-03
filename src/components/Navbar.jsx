"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function NavList() {
  const navItems = [
    { text: "Home", href: "/" },
    { text: "About Me", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Skills", href: "/skills" },
    { text: "Experience", href: "/experience" },
    { text: "Education", href: "/education" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          color="blue-gray"
          className="p-1 font-medium font-montserrat text-blue-gray-100 hover:text-white"
          key={item.text} // It's better to use a unique identifier
        >
          <Link
            href={item.href}
            className="flex items-center text-blue-gray-100 hover:text-white transition-colors"
          >
            {item.text}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      color="transparent"
      variant="transparent"
      className="mb-12 font-montserrat lg:w-[95%] lg:mx-auto px-6 py-3  shadow-md bg-[#0f172a] bg-opacity-50 lg:bg-transparent lg:shadow-none lg:bg-opacity-0 lg:border-none"
    >
      <div className="flex items-center justify-between text-blue-gray-100">
        <div className="flex gap-2 items-center justify-center">
          <Link href="/">
            <Image
              className="rounded-full transform transition duration-300 ease-in-out hover:rotate-3"
              src="/main-image.jpg"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>

          <Link href="/">
            <Typography className=" text-2xl text-blue-gray-100 tracking-tighter md:text-3xl mr-4 cursor-pointer py-1.5 hover:text-white transition-colors font-iceland">
              Meriç <span className="font-medium">Cintosun</span>
            </Typography>
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="border border-[#a4b8e9] border-opacity-45 my-4  p-4 bg-[#0f172a] rounded-sm bg-opacity-50">
          <NavList />
        </div>
      </Collapse>
    </Navbar>
  );
}
