"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Skills
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="flex justify-center items-center w-[20rem] outline-none outline-0">
            <li>
              <div className="flex justify-center gap-6 items-center w-80 ">
                <MenuItem>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex justify-center items-center text-sm font-bold "
                  >
                    Soft Skills
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex justify-center items-center text-sm font-bold"
                  >
                    Hard Skills
                  </Typography>
                </MenuItem>
              </div>
            </li>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <ul className="pl-6">
            <MenuItem className="py-1">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Soft Skills
              </Typography>
            </MenuItem>
            <MenuItem className="py-1">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Hard Skills
              </Typography>
            </MenuItem>
          </ul>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Me
        </ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Projects
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Experience
        </ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Education
        </ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blog</ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      ></Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <div className="flex gap-2 justify-center items-center">
            <Image
              src="/main-image.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Typography as="div" variant="h6" className="font-bold">
              Meriç Cintosun
            </Typography>
          </div>
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Contact Us
          </ListItem>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
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
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden text-[#1E263A]">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Contact Us
          </ListItem>
        </div>
      </Collapse>
    </Navbar>
  );
}
