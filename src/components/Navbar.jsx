"use client";

import React from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 cursor-pointer"
              selected={isMenuOpen}
            >
              Skills
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </MenuHandler>
          <MenuList className="max-w-screen-xl rounded-xl">
            <motion.ul
              className="flex justify-center items-center w-[20rem] outline-none outline-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <li>
                <div className="flex justify-center gap-6 items-center w-80">
                  <MenuItem>
                    <Link href="/soft-skills">
                      <div className="flex justify-center items-center text-sm text-blue-gray-700 transition-colors duration-300">
                        Soft Skills
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/hard-skills">
                      <div className="flex justify-center items-center text-sm text-blue-gray-700 transition-colors duration-300">
                        Hard Skills
                      </div>
                    </Link>
                  </MenuItem>
                </div>
              </li>
            </motion.ul>
          </MenuList>
        </Menu>
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden">
        <ListItem
          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 cursor-pointer"
          selected={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
        >
          Skills
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </ListItem>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <Collapse open={isMobileMenuOpen}>
            <ul className="pl-6">
              <MenuItem className="py-1">
                <Link href="/soft-skills">
                  <div className="font-normal text-blue-gray-700 transition-colors duration-300">
                    Soft Skills
                  </div>
                </Link>
              </MenuItem>
              <MenuItem className="py-1">
                <Link href="/hard-skills">
                  <div className="font-normal text-blue-gray-700 transition-colors duration-300">
                    Hard Skills
                  </div>
                </Link>
              </MenuItem>
            </ul>
          </Collapse>
        </motion.div>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  transition-colors duration-300">
          Home
        </ListItem>
      </Link>
      <Link href="/about">
        <ListItem className="flex items-center w-[97px] gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  transition-colors duration-300">
          About Me
        </ListItem>
      </Link>
      <Link href="/projects">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  transition-colors duration-300">
          Projects
        </ListItem>
      </Link>
      <NavListMenu />
      <Link href="/experience">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  transition-colors duration-300">
          Experience
        </ListItem>
      </Link>
      <Link href="/education">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  transition-colors duration-300">
          Education
        </ListItem>
      </Link>
      <Link href="/blog">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  transition-colors duration-300">
          Blog
        </ListItem>
      </Link>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="mt-4">
      <Navbar className="mx-auto max-w-screen-2xl px-4 py-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between text-blue-gray-900"
        >
          <Link href="/">
            <div className="mr-4 cursor-pointer py-1.5 lg:ml-2 transition-colors duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex gap-2 justify-center items-center"
              >
                <Image
                  src="/main-image.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
                <div className="transition-colors duration-300 font-semibold text-blue-gray-900">
                  Meriç Cintosun
                </div>
              </motion.div>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden gap-2 lg:flex"
          >
            <Link href="/contact">
              <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  rounded-md transition-colors duration-300">
                Contact
              </ListItem>
            </Link>
          </motion.div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden hover:bg-blue-100 transition-colors duration-300"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </motion.div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden text-[#1E263A]">
            <Link href="/contact">
              <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-blue-gray-900 cursor-pointer  rounded-md transition-colors duration-300">
                Contact
              </ListItem>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
}
