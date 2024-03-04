"use client";
import { nav } from "@/links/navLinks";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

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

  // const opacityNav = useTransform(scrollY, [0, 5, 7, 10], [1, 0.5, 0.5, 0]);
  const pathname = usePathname();

  const [navButon, setNavBoton] = useState(pathname);
  return (
    <motion.header
      style={{ y: yNav, height: hight, backgroundColor: background }}
      transition={{ duration: 3 }}
      className=" bg-skin-header fixed left-0 right-0 top-0 z-50 shadow-md border-b-2 px-44 py-[10px] "
    >
      <nav className=" flex  justify-between items-center">
        <Link href="/">
          <Image
            quality={90}
            src="/jklogo.png"
            alt="logo"
            width={70}
            height={70}
          />
        </Link>
        <ul className="flex gap-10 text-gray-700 font-poppins text-[0.785rem] justify-center items-center">
          {nav.map((link) => (
            <Link
              key={link.name}
              onClick={() => navButt(link.href)}
              href={link.href}
              className={` ${link.href === navButon ? "text-yellow-500" : ""} `}
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
            className=" border-l-[1px] border-gray-500 -ml-6"
          >
            <p className=" pl-3 text-[0.655rem]">
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
    </motion.header>
  );
}

export default Nav;
