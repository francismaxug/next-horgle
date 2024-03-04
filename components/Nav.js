"use client";
import { nav } from "@/links/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRightIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "./BackDrop";

function Nav() {
  function navButt(id) {
    setNavBoton(id);
  }
  const { scrollY } = useScroll();

  const yNav = useTransform(scrollY, [0, 100, 170], [0, -200, 0]);
  const hight = useTransform(scrollY, [0, 50, 170], [70, 80, 68]);
  const background = useTransform(
    scrollY,
    [0, 50, 170],
    ["#112c53", "#112c53", "#fefefe"]
  );
  const mainV = {
    hidden: { y: 0 },
    visible: {
      y: 0,
      transition: {
        duration: 0,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };
  
  const pathAnimated = {
    hidden:{
      
      pathLength:0
    },
    visible:{
    
      pathLength:1,
      transition:{
        duration:2,
        ease:"easeInOut"
      }
    }
  }

  // const opacityNav = useTransform(scrollY, [0, 5, 7, 10], [1, 0.5, 0.5, 0]);
  const pathname = usePathname();

  const [navButon, setNavBoton] = useState(pathname);
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className=" w-full bg-skin-header  fixed left-0 right-0 top-0 z-50 xl:px-28 shadow-md border-2 py-[10px] ">
      <div className=" mx-auto max-w-[60rem] flex justify-between">
        <Link href="/">
          <div className=" flex gap-x-0.5 justify-center items-center">
            {" "}
            <Image
              quality={90}
              src="/jklogo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="cursor-pointer ml-3 lg:w-[4.5rem] lg:h-[3.3rem]  w-12 h-8 sm:w-[3.7rem] sm:h-[2.3rem]"
            />
            <div className="font-poppins text-sm lg:text-base font-semibold hidden md:block">
              J.K Horgle <br /> Transport & Co Ltd
            </div>
          </div>
        </Link>
        <nav className="-ml-40 hidden lg:mr-12  sm:mr-6 sm:flex-wrap  sm:flex sm:justify-between sm:items-center">
          <ul className="flex sm:gap-x-7 text-gray-700 font-poppins text-[0.785rem] justify-center items-center">
            {nav.map((link) => (
              <Link
                href={link.href}
                onClick={() => navButt(link.href)}
                key={link.name}
                className={` sm:text-[0.6rem] md:text-[0.7rem] ${
                  link.href === navButon ? "text-yellow-500" : ""
                } `}
              >
                {link.name}
                <motion.div
                  initial={{ width: "0%", x: -40 }}
                  animate={{
                    width: navButon === link.href ? ["95%", "65%"] : "0%",
                    x: navButon === link.href ? 0 : -40,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`${
                    link.href === navButon ? "block" : "hidden"
                  } h-0.5 w-6 bg-black`}
                />
              </Link>
            ))}
            <Link
              onClick={() => navButt("/contact")}
              href="/contact"
              className="  border-l-[1px] border-gray-500 -ml-6"
            >
              <p className=" pl-3 sm:text-[0.6rem]">
                Lets talk{" "}
                <span className=" inline-block">
                  <ArrowUpRightIcon className=" h-3 w-3" />
                </span>
              </p>
              <motion.div
                initial={{ width: "0%", x: -10 }}
                animate={{
                  width: navButon === "/contact" ? ["45%", "45%"] : "0%",
                  x: navButon === "/contact" ? 15 : -40,
                }}
                transition={{ duration: 0.4 }}
                className={`${
                  navButon === "/contact" ? "block" : "hidden"
                } h-0.5 w-6 bg-black`}
              />
            </Link>
          </ul>
        </nav>
        {navbarOpen ? (
          <svg
        
            onClick={() => setNavbarOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cursor-pointer sm:hidden mr-5 h-6 w-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
             
          </svg>
        ) : (
          <svg
            onClick={() => setNavbarOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cursor-pointer sm:hidden mr-5 h-6 w-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
        {/* <Bars3BottomRightIcon
          onClick={() => setNavbarOpen((prev) => !prev)}
          className="cursor-pointer mr-5 h-6 w-6 text-gray-700"
        /> */}
        {navbarOpen && (
          <Modal setNavbarOpen={setNavbarOpen}>
            <motion.nav
              initial={{ x: "30vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className={` fixed z-30 right-0 w-1/2 pt-6 bg-black/70 top-[3.07rem] text-skin-textWhite h-[100vh]`}
            >
              <ul
                onClick={() => setNavbarOpen(false)}
                className=" flex flex-col gap-y-6 items-center text-sm"
              >
                {nav.map((link) => (
                  <Link href={link.href} key={link.name}>
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                >
                  <p className="">contact</p>
                </Link>
              </ul>
            </motion.nav>
          </Modal>
        )}
      </div>
    </header>
  );
}

export default Nav;
