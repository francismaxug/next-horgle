"use client";
import ImageSlider from "@/components/ImageSlider";
import Location from "@/components/Location";
import Wrapper from "@/components/Wrapper";
import { numbers, square, text } from "@/loops/textsvg";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Places from "./Places";
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
    [0, 100, 100, 100, 100]
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
        <Wrapper className=" mb-24">
          <div className=" relative top-20 -z-10">
            <Image
              quality={90}
              src="/dotdot.png"
              alt="logo"
              width={170}
              height={70}
            />
          </div>
          <div className="ml-14 space-y-3 mt-10">
            <motion.p
              style={{ scale: scaleText, y: yText }}
              initial={{ opacity: 0.3, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-black text-[3.2rem] leading-[1] font-medium font-fredoka"
            >
              We are dynamic, responsible and most trusted petroleum transporter
              <span className=" text-7xl text-yellow-500 leading-[0]">.</span>
            </motion.p>
            <motion.p
              style={{ scale: scaleText, y: yText }}
              initial={{ opacity: 0.3, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className=" text-[1rem]"
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
        className=" relative z-0 h-[32rem]"
      >
        <Image
          className=" w-full h-[32rem] object-fill object-center"
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
        className="bg-white relative z-10"
      >
        <Wrapper className=" h-screen mt-16 grid grid-cols-2 gap-6">
          <div>
            <p className=" text-[0.9rem] text-skin-gray font-poppins">
              Our Services
            </p>
            <p className=" pt-7 pb-3 font-fredoka text-[2.7rem] leading-[1] font-medium">
              We offer premium <br /> petroleum <br /> distribution services.
            </p>
            <p className=" text-[0.85rem]">
              We transport products via road to all parts of Ghana and West
              Africa. With our stellar safety record, we aim to ensure a hassle
              free service to all our clients.
            </p>
          </div>
          <div>
            {text.map((item) => (
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                key={item.id}
                className=" border-b-[1px] border-black/35 py-7"
              >
                <div className=" flex gap-3 items-center justify-between">
                  {" "}
                  <Image
                    className=" w-10 h-8"
                    src={item.img}
                    alt={item.h1}
                    width={60}
                    height={0}
                  />
                  <h1 className=" w-44  leading-6 font-poppins text-sm font-semibold">
                    {item.h1}
                  </h1>
                  <p
                    className={`${
                      item.id === 2 || item.id === 4 ? "-ml-1" : ""
                    } ml-7 text-xs`}
                  >
                    {item.p}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </motion.div>
      <div className=" bg-[#112c53]  h-screen ">
        <Wrapper className="h-screen grid grid-cols-2 gap-6 py-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className=" text-[0.9rem] text-gray-300/85 font-poppins">
              Our Services
            </p>
            <p className=" pt-7 pb-3 font-fredoka text-skin-textWhite text-[2.7rem] leading-[3.5rem] font-medium">
              Why we are your preferred bulk petroleum <br /> transporter by
              road{" "}
              <span className=" text-7xl text-yellow-500 leading-[0]">.</span>
            </p>
          </motion.div>
          <motion.div
            variants={poip}
            initial="hidden"
            whileInView="visible"
            className=" grid grid-cols-2 gap-4  "
          >
            {square.map((item) => (
              <motion.div
                variants={childv}
                key={item.id}
                className=" bg-skin-bgLightblue p-5   [&:nth-child(3)]:bg-skin-bgyellow "
              >
                <div
                  className={` flex gap-2 flex-col  ${
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
                  <h1 className=" leading-5  font-poppins text-sm font-semibold">
                    {item.h1}
                  </h1>
                  <p className={` text-xs `}>{item.p}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Wrapper>
      </div>
      <motion.div variants={poips} initial="hidden" whileInView="visible">
        <Wrapper className=" h-screen mt-20 grid grid-cols-3 mb-28 gap-6">
          <motion.div variants={v}>
            <p className=" text-[0.9rem] text-skin-gray font-poppins">
              Our Coverage
            </p>
            <p className=" pt-7 pb-3 font-fredoka text-[2.7rem] leading-[1] font-medium">
              International <br /> network <br /> of partners
            </p>
          </motion.div>

          <div className=" col-span-2 space-y-12 group/first">
            <motion.div variants={vi} className="relative z-10 ">
              <Image
                className=" w-full h-full relative "
                src="/map.jpg"
                alt="map"
                quality={85}
                priorityy="true"
                width={1000}
                height={1000}
              />

              <div className=" absolute right-[20.9rem] bottom-[8.5rem] z-20">
                <Location />
              </div>

              <div className="group/edit cursor-pointer invisible group-hover/first:visible absolute w-24 h-24 z-20 top-12 left-60 mt-28  bottom-40">
                <a
                  href="https://maps.app.goo.gl/iJru9uQ9ePT3owLz8"
                  target="_blank"
                >
                  <div className=" px-1 py-0.5 w-[13rem] invisible shadow-lg z-50 group-hover/edit:visible h-[7.69rem] bg-white border absolute -left-8 top-[3.9rem]">
                    <p className=" text-[0.75rem] pb-0.5 underline underline-offset-2">
                      J.K. Horgle Transport and Co. Ltd
                    </p>

                    <div className=" space-y-1">
                      <div className=" flex items-center gap-x-1">
                        <p className=" text-[0.75rem]">4+</p>
                        <StarIcon className=" h-3 w-3 fill-yellow-500 stroke-yellow-500 inline-block" />
                        <StarIcon className=" h-3 w-3 fill-yellow-500 stroke-yellow-500 inline-block" />
                        <StarIcon className=" h-3 w-3 fill-yellow-500 stroke-yellow-500 inline-block" />
                        <StarIcon className=" h-3 w-3 fill-yellow-500 stroke-yellow-500 inline-block" />
                        <span className=" text-[0.7rem]">(44) reviews</span>
                      </div>
                      <div className=" flex items-center gap-x-1">
                        <ClockIcon className=" h-3 w-3 stroke-blue-500 inline-block" />
                        <p className=" text-[0.75rem]">
                          <span className=" text-green-700">Open .</span> Closes
                          5pm
                        </p>
                      </div>
                      <div className=" flex items-center gap-x-1">
                        <PhoneIcon className=" h-3 w-3 stroke-blue-500 inline-block" />
                        <p className=" text-[0.75rem]">030 292 1162</p>
                      </div>

                      <div className=" flex items-center gap-x-1">
                        <MapPinIcon className=" h-3 w-3 stroke-blue-500 inline-block" />
                        <p className=" text-[0.625rem]">
                          5°43'14. 0°01'13, 4"N 5th Circular Rd, Accra
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* <div className="  left-0 right-0 top-0 z-50">
              <Location />
            </div> */}
            </motion.div>

            <motion.div variants={vii} className=" grid grid-cols-2 gap-5">
              <div className=" py-3 space-y-7 border-t-[1px] border-black/60">
                <p className=" leading-5  font-poppins text-sm font-semibold">
                  70+ Partners
                </p>
                <p className=" text-xs text-gray-600 leading-5">
                  With a strong network of partners we safely & efficiently
                  transport over seven hundred million litres of petroleum &
                  allied products across the West African sub region
                </p>
              </div>
              <div className=" py-3 space-y-7 border-t-[1px] border-black/60">
                <p className=" leading-5  font-poppins text-sm font-semibold">
                  16+ Cities
                </p>
                <p className=" text-xs text-gray-600 leading-5">
                  Accra-Kumasi-Buipe-Takoradi-Obuasi-Tarkwa-Elubo-Lome-Lagos-Conakry-Ouagadougu-Gao-Agadez,
                  travelling over ten million kilometers per annum, we cover
                  major and minor cities via approved safe routes to deliver to
                  our customers on time, in full quantity and high quality
                </p>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </motion.div>
      <div className=" bg-[#030d1c] h-[48.7rem] ">
        <Wrapper className="h-screen grid grid-cols-3 gap-6 py-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className=" text-[0.9rem] text-gray-300/85 font-poppins">
              Our Numbers
            </p>
            <p className=" pt-7 pb-3 font-fredoka text-skin-textWhite text-[2.7rem] leading-[3.5rem] font-medium">
              Our company in significant numbers
              <span className=" text-7xl text-yellow-500 leading-[0]">.</span>
            </p>
          </motion.div>
          <div className=" col-span-2">
            <motion.div
              variants={poip}
              initial="hidden"
              whileInView="visible"
              className=" grid grid-cols-2 gap-x-4 gap-y-10  "
            >
              {numbers.map((item) => (
                <motion.div
                  variants={childv}
                  key={item.id}
                  className="pl-3 flex flex-col"
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
                      <p className=" text-yellow-500 font-poppins text-5xl font-bold">
                        {item.number} <span className=" text-2xl">+</span>
                      </p>
                      <h1 className=" leading-5 text-skin-textWhite  font-poppins text-lg font-semibold">
                        {item.h1}
                      </h1>
                      <p
                        className={` text-sm font-poppins leading-[1.4rem] text-skin-textWhite `}
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
      <Wrapper className="h-screen grid grid-cols-3 gap-6 py-20">
        <div>
          <p className=" text-[0.9rem] text-gray-400 font-poppins">
            Our Numbers
          </p>
          <p className=" pt-7 pb-3 font-fredoka text-skin-textblack text-[2.7rem] leading-[3.5rem] font-medium">
            What people are saying about us
            <span className=" text-7xl text-yellow-500 leading-[0]">.</span>
          </p>
        </div>
        <div className=" col-span-2">
          <div>
            {/* <script
              src="https://static.elfsight.com/platform/platform.js"
              data-use-service-core
              defer
            ></script>
            <div
              class="elfsight-app-641c5c50-1208-4696-b5bf-3eabfbd1aab7"
              data-elfsight-app-lazy
            ></div> */}
          </div>
        </div>
      </Wrapper>
      <div className=" bg-[#f6f7fb] h-[32.7rem] ">
        <Wrapper className="h-screen grid grid-cols-3 gap-6 py-10">
          <div className="mt-14">
            <p className=" text-[0.9rem] text-gray-400 font-poppins">
              Our Partners
            </p>
            <p className=" pt-7 pb-3 font-fredoka text-skin-textblack text-[2.7rem] leading-[3.5rem] font-medium">
              You are in a good <br /> company
            </p>
          </div>
          <div className=" col-span-2">
            <ImageSlider />
          </div>
        </Wrapper>
      </div>
      <Wrapper className="py-10 h-[42rem] my-14">
        <motion.div
          ref={scrollRef}
          style={{}}
          className=" w-full h-full border-2 relative"
        >
          <Image
            className=" w-full h-full absolute"
            src="https://res.cloudinary.com/webbermill/image/upload/v1679606043/webbermill-website-assets/static/news/jhk_wfzwcf.jpg"
            alt="photo"
            width={2000}
            height={1000}
          />
          <motion.div className=" absolute bottom-0 font-poppins pb-8 flex py-5 font-bold px-2">
            <div className="group/first px-7 space-y-10   border-r-[3px] border-white cursor-pointer">
              <p className=" tracking-wide text-4xl text-skin-textWhite ">
                {" "}
                Experience Working At Lovely
              </p>
              <Link
                href="/"
                className="text-[0.7rem]  text-gray-300 font-poppins"
              >
                Read More{" "}
                <span className=" ml-[2px] ">
                  <ArrowRightIcon className=" transition-transform duration-300 group-hover/first:translate-x-0.5 stroke-2 stroke-gray-300 w-3 h-3 inline-block" />
                </span>
              </Link>
            </div>
            <div className=" group/second px-7 space-y-4 cursor-pointer">
              <p className=" tracking-wide text-4xl text-skin-textWhite ">
                {" "}
                Start touching lives through your work
              </p>
              <Link
                href="/"
                className="text-[0.7rem] text-gray-300  font-poppins"
              >
                Read More{" "}
                <span className=" ml-[2px]">
                  <ArrowRightIcon className=" transition-transform duration-300 group-hover/second:translate-x-0.5 stroke-2 stroke-gray-300 w-3 h-3 inline-block" />
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Wrapper>
      <motion.div className=" w-full h-[39rem] relative z-0 bg-black/10 flex justify-center">
        <Image
          src="/men5.jpg"
          alt="men"
          width={2000}
          height={2000}
          quality={90}
          className=" w-full h-[39rem] mix-blend-overlay object-cover object-center z-10"
        />
        <div className=" absolute z-40 bottom-0 mb-16">
          <p className=" text-[2.4rem] text-skin-textWhite font-semibold font-poppins">
            Innovating to secure health and safety of our <br /> workers, people
            and the environment.
          </p>
          <Link href="/" className="text-[0.7rem] text-gray-200  font-poppins">
            Read More{" "}
            <span className=" ml-[2px]">
              <ArrowRightIcon className="  stroke-2 stroke-gray-300 w-3 h-3 inline-block" />
            </span>
          </Link>
        </div>
      </motion.div>
      {/* <ImageSlider /> */}
      <Footer />
    </>
  );
}
