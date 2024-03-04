"use client";
import ImageSlider from "@/components/ImageSlider";
import Location from "@/components/Location";
import Wrapper from "@/components/Wrapper";
import { numbers, square, text } from "@/loops/textsvg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ppp = {
  hidden: { y: 90 },
  whileInView: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 3,
      duration: 1,
    },
  },
};
const poips = {
  hidden: { y: 10 },
  visible: {
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.5,

      when: "beforeChildren",
    },
  },
};
const v = {
  hidden: { x: -40 },
  visible: { x: 0, transition: { duration: 0.7 } },
};
const vi = {
  hidden: { scale: 0.9 },
  visible: { scale: 1, transition: { duration: 0.8 } },
};
const vii = {
  hidden: { y: 40 },
  visible: { y: 0, transition: { duration: 0.9, delay: 1.5 } },
};
const poip = {
  hidden: { x: 10 },
  visible: {
    x: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};
const childv = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
};

export default function Home() {
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const refs = useRef(null);
  const { scrollY } = useScroll({ target: scrollRef });

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
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["5%", "120%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  // const backgroundYs = useTransform(scrollYProgress, [0, 1], ["5%", "120%"]);
  return (
    <>
      <div>
        <Wrapper className="mb-16 md:mb-14 lg:mb-0 2xl:mb-16 h-auto">
          <div className=" relative  top-20 md:top-24 md:ml-2 2xl:top-28 xl:ml-16 -z-10">
            <Image
              quality={90}
              src="/dotdot.png"
              alt="logo"
              width={1000}
              height={1000}
              className=" w-20 h-16 md:max-2xl:w-32 md:max-2xl:h-32 2xl:w-32 2xl:h-32"
            />
          </div>
          <div className=" 2xl:mt-14 max-w-[48rem] md:max-2xl:mb-10 md:-mt-4 lg:max-2xl:-mt-0 space-y-3 mt-12 px-4 xl:ml-28 ">
            <motion.p
              style={{ scale: scaleText, y: yText }}
              initial={{ opacity: 0.3, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className=" 2xl:text-[2.6rem] md:leading-[2.5rem] 2xl:leading-[2.0rem] font-bold xl:max-2xl:text-[2.5rem] font-Carnas text-[1.29rem] sm:text-[1.99rem] md:text-[2rem] carnas "
            >
              We are dynamic, responsible and most trusted petroleum transporter
              <span className=" lg:text-5xl text-yellow-500 ">.</span>
            </motion.p>
            <motion.p
              style={{ scale: scaleText, y: yText }}
              initial={{ opacity: 0.3, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className=" lg:text-[0.95rem] font-poppins text-justify text-[0.85rem]  "
            >
              J.K Horgle Transport and Company Limited seeks to become a first
              class petroleum haulage company of <br /> choice in Ghana and the
              West Africa sub-region by delivering unequalled value to its
              stakeholders in a socially <br /> and environmentally sustainable
              manner.
            </motion.p>
          </div>
        </Wrapper>
      </div>
      <motion.div
        ref={ref}
        style={{ y: backgroundY }}
        className=" relative z-0 h-auto"
      >
        <Image
          className=" w-full h-[19rem]  2xl:mt-10 sm:h-[24rem] md:h-[32rem] object-cover lg:object-fill object-center"
          src="/tanker.png"
          alt="people"
          priority="true"
          quality={80}
          width={2000}
          height={100}
        />
      </motion.div>
      <motion.div
        variants={ppp}
        initial="hidden"
        whileInView="whileInView"
        className="bg-white relative z-10 py-2"
      >
        <Wrapper className=" h-[61rem] sm:h-[49rem] lg:h-[35rem] mt-10 lg:mt-16 px-3 lg:grid lg:grid-cols-2 lg:gap-8 ">
          <div className=" -mt-6 sm:-mt-0">
            <p className=" text-[0.9rem] text-skin-gray font-Carnas">
              Our Services
            </p>
            <p className=" pt-7 pb-5 text-[1.3rem] sm:text-[2.3rem] font-Carnas lg:text-[2.7rem] sm:leading-[1.5] font-bold">
              We offer premium <br className="hidden sm-block" /> petroleum{" "}
              <br /> distribution services.
            </p>
            <p className=" mb-5 text-[0.85rem] font-poppins sm:text-[0.9rem]">
              We transport products via road to all parts of Ghana and West
              Africa. With our stellar safety record, we aim to ensure a hassle
              free service to all our clients.
            </p>
          </div>
          <div className=" sm:mt-8">
            {text.map((item) => (
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                key={item.id}
                className=" border-b-[1px]  border-black/35 py-7"
              >
                <div className=" space-y-3 sm:space-y-0 sm:flex sm:gap-7 sm:items-center sm:justify-between">
                  {" "}
                  <Image
                    className=" w-10 h-8"
                    src={item.img}
                    alt={item.h1}
                    width={100}
                    height={100}
                  />
                  <h1 className="  leading-6 font-poppins text-sm font-semibold">
                    {item.h1}
                  </h1>
                  <p
                    className={`${
                      item.id === 1 || item.id === 3 ? "" : ""
                    } text-xs`}
                  >
                    {item.p}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </motion.div>
      <div className=" bg-[#112c53]  h-auto sm:h-[67rem] md:h-[43.5rem] lg:h-[36rem]  px-3 sm:max-xl:px-3  ">
        <Wrapper className=" h-auto sm:h-screen grid lg:grid-cols-2 py-10  gap-6 lg:py-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[1.2rem] font-Carnas sm:text-[0.9rem] text-gray-300/85">
              Our Services
            </p>
            <p className=" pt-7 pb-3 font-Carnas text-skin-textWhite text-[1.1rem] lg:text-[2.5rem] sm:max-lg:text-[2.2rem] lg:leading-[3.5rem] font-bold">
              Why we are your preferred bulk petroleum <br /> transporter by
              road{" "}
              <span className="xl:text-7xl lg:text-5xl text-yellow-500 leading-[0]">
                .
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={poip}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-rows-[225px_225px_225px_225px]  grid lg:grid-cols-2 gap-4 lg:gap-4 md:grid-cols-2 md:gap-4  "
          >
            {square.map((item) => (
              <motion.div
                variants={childv}
                key={item.id}
                className=" bg-skin-bgLightblue flex items-center border-gray-400/40 border px-2.5 py-3    [&:nth-child(3)]:bg-skin-bgyellow "
              >
                <div
                  className={` flex gap-y-2.5 flex-col ${
                    item.id === 3 ? "text-black" : "text-white"
                  } `}
                >
                  {" "}
                  <Image
                    className=" w-10 h-10"
                    src={item.img}
                    alt={item.h1}
                    width={60}
                    height={0}
                  />
                  <h1 className=" leading-5 text-[0.99rem]  font-Carnas sm:text-sm font-semibold">
                    {item.h1}
                  </h1>
                  <p className={` sm:text-xs text-[0.87rem] `}>{item.p}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Wrapper>
      </div>
      <motion.div variants={poips} initial="hidden" whileInView="visible" className="">
        <Wrapper className="h-[45rem] space-y-6 sm:space-y-8 mt-10 sm:max-lg:mt-12 px-3 md:px-3 sm:px-5 lg:mt-20 lg:grid grid-rows-[1fr_1fr] lg:grid-cols-3 md:mb-10 mb-28 sm:mb-16 lg:mb-5 lg:gap-9">
          <motion.div variants={v}>
            <p className=" text-[1rem] lg:text-[0.9rem] text-skin-gray font-Carnas">
              Our Coverage
            </p>
            <p className=" text-[1.3rem] pt-7 pb-3 font-Carnas lg:text-[2.7rem] leading-[1] font-bold">
              International <br className="hidden lg:block" /> network <br /> of
              partners
            </p>
          </motion.div>

          <div className=" col-span-2 space-y-16 ">
            <motion.div
              variants={vi}
              className="relative z-10 flex justify-center items-center"
            >
              <Image
                className=" lg:w-full pt-[22px] sm:pt-0 lg:h-full md:[w-90%] md:h-[90%] sm:w-[80%] sm:h-[80%]  "
                src="/map.jpg"
                alt="map"
                quality={85}
                priorityy="true"
                width={1000}
                height={1000}
              />
              <div className="absolute md:-ml-[44px] md:-mt-[16px] sm:-mt-[29px] -mt-[18px] -ml-[29px] 2xl:-mt-[9px] 2xl:-ml-[55px]   z-40">
                <Location />
              </div>
            </motion.div>

            <motion.div
              variants={vii}
              className=" grid md:grid-cols-2 space-y-9 md:space-y-0 md:gap-x-5"
            >
              <div className=" py-3 space-y-7 border-t-[1px] border-black/60">
                <p className=" leading-5  font-poppins text-[1.05rem] md:text-sm font-semibold">
                  70+ Partners
                </p>
                <p className="text-[0.87rem] md:text-xs text-gray-600 leading-5">
                  With a strong network of partners we safely & efficiently
                  transport over seven hundred million litres of petroleum &
                  allied products across the West African sub region
                </p>
              </div>
              <div className=" py-3 space-y-7 border-t-[1px] border-black/60">
                <p className=" leading-5  font-poppins text-[1.05rem] md:text-sm font-semibold">
                  16+ Cities
                </p>
                <p className=" text-[0.87rem] md:text-xs text-gray-600 leading-5">
                  Accra-Kumasi-Buipe-Takoradi-Obuasi-Tarkwa-Elubo-Lome-Lagos-Conakry-Ouagadougu-Gao-Agadez,
                  travelling over ten million kilometers per annum, we cover
                  major and minor cities via approved safe routes to deliver to
                  our customers on time, in full quantity and high quality.
                </p>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </motion.div>
      <div className=" bg-[#030d1c] h-[84.7rem] xl:h-[50rem] lg:h-[54rem] md:h-[54rem] sm:h-[60rem] md:px-3 px-3 sm:px-3 ">
        <Wrapper className="h-screen grid lg:grid-cols-3 py-8 sm:max-lg:py-14 lg:gap-6 gap-y-10 sm:gap-y-8 md:gap-y-10 lg:py-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[1.1rem] sm:max-md:text-[1rem] lg:text-[0.9rem] text-gray-300/85 font-poppins">
              Our Numbers
            </p>
            <p className=" pt-7 font-Carnas text-[1.3rem] sm:text-[1.7rem] text-skin-textWhite lg:text-[2.7rem] lg:leading-[3.5rem] font-bold">
              Our company in significant numbers
              <span className="text-4xl lg:text-7xl text-yellow-500 leading-[0]">
                .
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={poip}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" col-span-2"
          >
            <div className=" grid gap-y-8 md:grid-cols-2 sm:grid-cols-2  md:gap-y-8 md:gap-x-9 lg:gap-x-4 sm:gap-y-9 sm:gap-x-4 lg:gap-y-10  ">
              {numbers.map((item) => (
                <motion.div
                  variants={childv}
                  key={item.id}
                  className="lg:pl-3 flex flex-col"
                >
                  <div className=" bg-orange-300/40 w-5 h-5 flex mb-5 justify-center items-center rounded-full  ">
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
                    <div className=" mt-7 space-y-6">
                      <p className="text-3xl text-yellow-500 md:text-4xl font-poppins lg:text-5xl font-bold">
                        {item.number} <span className=" text-2xl">+</span>
                      </p>
                      <h1 className=" leading-5 text-skin-textWhite  font-poppins text-[1rem] md:text-lg font-semibold">
                        {item.h1}
                      </h1>
                      <p
                        className={`text-[0.8rem] md:text-sm font-poppins leading-[1.4rem] text-skin-textWhite `}
                      >
                        {item.p}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Wrapper>
      </div>
      <Wrapper className=" h-auto my-16 grid-rows-3 grid px-3 xl:px-0  ">
        <div>
          <p className="text-[1rem] md:text-[0.9rem] text-gray-400 font-poppins">
            Testimonies
          </p>
          <p className=" lg:pt-7 pb-3 font-Carnas text-[1.6rem] sm:max-lg:text-[2.3rem] text-skin-textblack lg:text-[2.7rem] lg:leading-[3.5rem] font-bold">
            What people are saying about us
            <span className=" text-4xl  lg:text-6xl text-yellow-500 lg:leading-[0]">
              .
            </span>
          </p>
        </div>

        <div className=" sm:h-[19rem] h-[23rem] row-span-2">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25373787"
            frameborder="0"
            width=""
            height=""
            className=" w-full h-full"
          ></iframe>
        </div>
      </Wrapper>
      <div className=" bg-[#f6f7fb] h-[27.7rem] sm:h-[35.5rem]  lg:h-[32.7rem] px-3 xl:px-0 ">
        <Wrapper className="h-auto sm:h-screen grid lg:grid lg:grid-cols-3 py-7 lg:gap-6 lg:py-7 xl:py-10">
          <div className="lg:mt-12 xl:mt-14">
            <p className=" text-[0.9rem] text-gray-400 font-poppins">
              Our Partners
            </p>
            <p className=" pt-7 text-[1.6rem] sm:max-lg:text-[2.3rem] lg:pb-3 font-Carnas text-skin-textblack lg:text-[2.7rem] lg:leading-[3.5rem] font-bold">
              You are in a good <br /> company
            </p>
          </div>
          <div className="  h-[16rem] sm:h-0 lg:col-span-2  lg:-mt-0">
            <ImageSlider />
          </div>
        </Wrapper>
      </div>
      <Wrapper className="lg:py-10 md:py-5 h-[24rem] sm:h-[28rem] md:h-[36rem] my-14">
        <div className=" w-full h-full border-2 relative">
          <Image
            className=" w-full h-full absolute object-center object-cover"
            src="https://res.cloudinary.com/webbermill/image/upload/v1679606043/webbermill-website-assets/static/news/jhk_wfzwcf.jpg"
            alt="photo"
            width={2000}
            height={1000}
          />
          <div className=" absolute -mb-3 w-full md:-mb-0 bottom-0 font-poppins gap-y-3 md:gap-y-0 md:flex-row flex-col pb-8 flex py-5 font-bold px-2">
            <div className="group/first md:px-7 px-2 py-3 md:py-0 space-y-10 border-b-2 md:border-b-0 md:border-r-[3px] border-white cursor-pointer">
              <p className=" font-Carnas font-bold tracking-wide md:text-2xl lg:text-4xl text-skin-textWhite ">
                {" "}
                Experience Working At <br className=" block md:hidden" /> Lovely
              </p>
              <Link
                href="/careers"
                className="text-[0.7rem]  text-gray-300 font-poppins"
              >
                Read More{" "}
                <span className=" ml-[2px] ">
                  <ArrowRightIcon className=" transition-transform duration-300 group-hover/first:translate-x-0.5 stroke-2 stroke-gray-300 w-3 h-3 inline-block" />
                </span>
              </Link>
            </div>
            <div className=" group/second md:px-7 px-2 md:py-0 space-y-4 cursor-pointer">
              <p className=" tracking-wide font-Carnas font-bold md:text-2xl  lg:text-4xl text-skin-textWhite ">
                {" "}
                Start touching lives through your work
              </p>
              <Link
                href="/careers"
                className="text-[0.7rem] text-gray-300  font-poppins"
              >
                Read More{" "}
                <span className=" ml-[2px]">
                  <ArrowRightIcon className=" transition-transform duration-300 group-hover/second:translate-x-0.5 stroke-2 stroke-gray-300 w-3 h-3 inline-block" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className=" h-[23rem] items-center w-full lg:h-[40rem] relative bg-black/10 flex justify-center">
        <Image
          src="/men5.jpg"
          alt="men"
          width={2000}
          height={2000}
          quality={90}
          className=" lg:w-full h-full lg:h-full absolute mix-blend-overlay object-cover object-center z-10"
        />
        <div className=" absolute z-20 bottom-0 mb-4 xl:mb-16  lg:mb-8 px-2 xl-px-0">
          <p className=" text-[1rem] sm:text-[1.4rem] xl:text-[2.4rem] lg:text-[2rem] text-skin-textWhite font-bold font-Carnas">
            Innovating to secure health and safety of our{" "}
            <br className="hidden lg:block" /> workers, people and the
            environment.
          </p>
          <Link href="/" className="text-[0.7rem] text-gray-200  font-poppins">
            Read More{" "}
            <span className=" ml-[2px]">
              <ArrowRightIcon className="  stroke-2 :stroke-gray-300 w-3 h-3 inline-block" />
            </span>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
