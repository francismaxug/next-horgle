"use client";
import Wrapper from "@/components/Wrapper";
import { numbers1 } from "@/loops/textsvg";
import Image from "next/image";

import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const poips = {
  hidden: { y: 10 },
  visible: {
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};
const childv = {
  hidden: { x: 90, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
};
function About() {
  const ref = useRef(null);
  // const scrollRef = useRef(null);
  const { scrollY } = useScroll();

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yText = useTransform(
    scrollY,
    [0, 150, 200, 300, 400],
    [0, 70, 70, 70, 70]
  );
  const scaleText = useTransform(
    scrollY,
    [0, 500, 550, 700, 750, 900],
    [1, 0.8, 0.7, 0.5, 0.4, 0.4]
  );
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["100%", "5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <main className=" mt-3">
      <div className="xl:py-20 h-auto mb-16">
        <Wrapper className=" h-72">
          <div className=" relative top-0 sm:max-xl:top-20 xl:top-o -z-10">
            <Image
              quality={90}
              src="/dotdot.png"
              alt="logo"
              width={170}
              height={70}
              className="sm:w-30 sm:h-30"
            />
          </div>
          <div className="xl:ml-14 px-3 xl:px-0 lg:-mt-10 -mt-16 sm:-mt-5  xl:-mt-20">
            <motion.p
              style={{ scale: scaleText, y: yText }}
              initial={{ opacity: 0.3, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-black text-[1.8rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[3.2rem] leading-[1]  xl:leading-[1] font-medium font-fredoka"
            >
              Since the 1970’s we’ve been fulfilling{" "}
              <br className=" hidden md:block lg:hidden" />
              dreams and moving economies of West African Countries
              <span className="text-4xl lg:text-4xl xl:text-7xl text-yellow-500 leading-[0]">
                .
              </span>
            </motion.p>
          </div>
        </Wrapper>
      </div>

      <div className="bg-[#112c53] lg:h-[40rem]  -mt-[5rem] relative z-20 lg:pt-20 pt-10 ">
        <Wrapper className=" bg-[#112c53] h-auto lg:h-[15rem] grid lg:grid-cols-2 gap-6">
          <div className=" px-3 xl:px-0">
            <div>
              <p className=" text-[1.4rem] sm:text-[1.4rem] md:text-[1.7rem] lg:text-[1.9rem] font-bold font-poppins text-skin-textWhite">
                Why we are your <br /> preferred bulk petroleum transporter by
                road.
              </p>
            </div>
            <div className=" font-poppins leading-[1.5rem] text-[0.8rem] text-skin-textWhite space-y-3 mt-5">
              <p>
                J.K. HORGLE TRANSPORT AND COMPANY LIMITED, started as an
                entrepreneurial dream over forty (40) years ago as a bulk
                peddling transporter operating as a private unregistered
                distributor in the petroleum sector, Joseph K Horgle.
              </p>
              <p>
                Entering the late 70’s, it became a bulk product transporter for
                Shell Petroleum in Ghana then operating under the business name
                of Texaco. Mr. JK Horgle led the business successfully until it
                was incorporated as a limited liability company in the year 2003
                with registration number CS269732013 and Tax identification
                number C0002561336.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-y-6">
            <div className=" px-3 xl:px-0 font-poppins leading-[1.5rem] text-[0.8rem] text-skin-textWhite space-y-3 mt-4">
              JKHTCL has since grown to over 400 contracted active trucks with a
              10% buffer for spot hires and maintenance replacement stock.
            </div>
            <div className=" lg:translate-y-8">
              <Image
                className=" w-full sm:h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover object-center"
                src="/two.jpg"
                alt=""
                width={2000}
                quality={80}
                height={1000}
              />
            </div>
          </div>
        </Wrapper>
      </div>
      <motion.div
        style={{ y: backgroundY }}
        ref={ref}
        className="fixed hidden left-0 right-0 top-[4%] lg:top-[10.9%] bottom-[30%] z-10 lg:block  lg:h-[45rem]"
      >
        <Image
          className=" w-full h-full object-cover object-center"
          src="/iii.jpg"
          alt="photo"
          width={2000}
          height={1000}
        />
      </motion.div>
      <div className=" bg-white border overflow-hidden h-auto relative z-20 lg:mt-[40rem]">
        <div className="  h-auto">
          <Wrapper className="h-auto py-10 grid gap-y-7 lg:grid-cols-3 md:gap-12 lg:gap-6 md:py-14 lg:py-20 ">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="px-3 xl:px-0 font-fredoka text-skin-textblack text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] md:leading-[3.5rem] lg:leading-[2.3rem] font-medium">
                We Have Offices In Tema, Takoradi, Kumasi And Buipe
                <span className=" text-4xl lg:text-4xl text-yellow-500 leading-[0]">
                  .
                </span>
              </p>
            </motion.div>
            <div className=" md:col-span-2 px-3 ">
              <motion.div
                variants={poips}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid gap-y-4 lg:gap-y-3 sm:grid-cols-2 items-start sm:gap-x-5 md:gap-x-5 md:gap-y-5`}
              >
                {numbers1.map((item) => (
                  <motion.div
                    variants={childv}
                    key={item.id}
                    className={`p-3 h-auto ${
                      item.id === 2 ? "bg-[#112c53]" : "bg-[#030d1c]"
                    } flex flex-col py-5  ${
                      item.id === 1 ? "sm:row-span-2  bg-black" : ""
                    } `}
                  >
                    <div className=" bg-orange-300/40 w-5 h-5 flex mb-3 justify-center items-center rounded-full  ">
                      {" "}
                      <Image
                        className={` w-3`}
                        src={item.img}
                        alt={item.h1}
                        width={60}
                        height={0}
                      />
                    </div>
                    <div className="border-t-[1px] border-gray-300">
                      <div className=" mt-1 space-y-2">
                        <p className=" text-yellow-500 font-poppins text-[1.8rem] lg:text-[2.5rem] md:text-[2.1rem] font-bold">
                          {item.number} <span className=" text-2xl">+</span>
                        </p>
                        <h1 className=" leading-5 text-skin-textWhite  font-poppins text-[1rem] font-semibold">
                          {item.h1}
                        </h1>
                        <p
                          className={` text-[0.7rem] font-poppins leading-[1.4rem] text-skin-textWhite `}
                        >
                          {item.p}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Wrapper>
        </div>
        <div className=" bg-[#f6f7fb] h-[20rem] flex items-center px-2 xl:px-0">
          <Wrapper className=" flex justify-center h-[15rem]">
            <div className=" gap-y-5 flex flex-col justify-center items-center text-center">
              <h1 className=" text-skin-textblack text-2xl font-bold font-poppins">
                Our Vision
              </h1>
              <p className=" text-[1.1rem]  font-poppins">
                J.K Horgle Transport And Company Limited seeks to become a first
                class petroleum haulage company of choice in ghana and the west
                africa sub-region by delivering unequalled value to its
                stakeholders in a socially and environmentally sustainable
                manner.
              </p>
            </div>
          </Wrapper>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default About;
