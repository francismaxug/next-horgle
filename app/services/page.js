"use client";
import Wrapper from "@/components/Wrapper";
import { regions, slides1, text } from "@/loops/textsvg";
import Image from "next/image";
import Places from "../Places";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { send } from "../actions/send";
import { toast } from "react-toastify";

const poips = {
  hidden: { y: 150 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
// const poipss = {
//   hidden: { y: 10 },
//   visible: {
//     y: 0,
//     transition: {
//       duration: 0,
//       staggerChildren: 0.5,
//       when: "beforeChildren",
//     },
//   },
// };
const save = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: { duration: 0.8 },
  },
};

const form = {
  hidden: { x: 8 },
  visible: {
    x: 0,
    transition: { duration: 0.8 },
  },
};
const childv = {
  hidden: { scale: 0.3, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
};
function Service() {
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // const yText = useTransform(
  //   scrollY,
  //   [150, 250, 300, 350, 400, 450, 520, 530, 550, 600, 700],
  //   [-60, -50, -40, -30, -40, -20, -10, 0, 0, 90, 100]
  // );
  const scaleText = useTransform(
    scrollY,
    [150, 200, 300, 400, 500, 600, 950, 970],
    [0.7, 0.8, 0.9, 1, 1, 0.9, 0.9, 0.6]
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["5%", "120%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [countryData, setCountryData] = useState([]);

  const handleSend = async () => {
    if (!name || !email || !messages || !country || !phone || !region) return;
    const res = await send(name, email, messages, country, phone, region);
    toast.success("Message sent!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setCountry("");
    setEmail("");
    setName("");
    setMessages("");
    setPhone("");
    setRegion("");
    setCompany("");

    console.log(res);
  };

  async function getPlaces() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const data1 = data.map((place) => place.name.common);
    const sortedItems = data1.slice().sort((a, b) => a.localeCompare(b));
    const data2 = ["Select Country", ...sortedItems];

    setCountryData(data2);
  }

  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <main className=" lg:mt-20 xl:mt-12 mt-16">
      <motion.div
        variants={poips}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" xl:py-12  xl:h-[30rem] h-auto px-3 xl-px-0"
      >
        <Wrapper className=" grid sm:grid-cols-2 md:grid-cols-3 gap-y-5 sm:gap-x-5 h-auto xl:h-[30rem]">
          <div className=" md:space-y-8 space-y-4">
            <h1 className="text-black text-[1.2rem] lg:text-[2.6rem] lg:leading-[3rem] font-bold font-Carnas">
              Leading the way with innovative technology
              <span className=" text-4xl xl:text-6xl lg:text-5xl text-yellow-500 leading-[0]">
                .
              </span>
            </h1>
            <p className=" text-sm font-poppins">
              We transport products via road to all parts of Ghana and West
              Africa. With our stellar safety record.
            </p>
            <motion.div className=" grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-x-1 gap-y-5">
              {slides1.map((item) => (
                <motion.div variants={childv} key={item.title}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={2000}
                    height={2000}
                    quality={80}
                    className="   object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className=" md:col-span-2  w-ful h-auto xl:h-[26rem]">
            <Image
              src="/petrol.jpg"
              alt=""
              width={2000}
              height={2000}
              quality={80}
              className="
               h-full object-cover object-center"
            />
          </div>
        </Wrapper>
      </motion.div>
      <div className=" xl:my-20 mt-8">
        <Wrapper className="h-auto">
          <div className=" relative top-10 -z-10 xl:flex xl:items-center">
            <Image
              className="absolute h-20 w-24"
              quality={90}
              src="/dotdot.png"
              alt="logo"
              width={170}
              height={170}
            />
          </div>
          <div className=" xl:ml-14 py-8">
            <motion.p
              style={{ scale: scaleText }}
              transition={{ duration: 0.7 }}
              className="text-black xl:leading-[3rem] md:text-[2.1rem] sm:text-[1.9rem] xl:text-[2.8rem] text-center font-medium font-fredoka"
            >
              We are dynamic, responsible and most trusted petroleum transporter
              <span className="  xl:text-6xl text-yellow-500">.</span>
            </motion.p>
          </div>
        </Wrapper>
      </div>
      <motion.div
        style={{ y: backgroundY }}
        ref={ref}
        className="h-[20rem] xl:h-[35rem] md:h-[27rem] lg:h-[31rem] relative z-0 "
      >
        <Image
          src="/men5.jpg"
          alt="work"
          quality={80}
          width={2000}
          height={2000}
          className=" object-cover object-center w-full h-full "
        />
      </motion.div>
      <motion.div
        variants={poips}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 border px-3 xl:px-0 h-auto xl:mt-28 bg-white"
      >
        <Wrapper className=" h-auto max-w-[50rem] py-6">
          <div className=" xl:py-8 py-5 sm:py-8 mb-6 xl:mb-12">
            <p className="text-black sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem] leading-[1] font-bold font-Carnas">
              Delivering dreams through our{" "}
              <br className="hidden sm:block lg:hidden" /> services
              <span className=" xl:text-7xl text-yellow-500 leading-[0]">
                .
              </span>
            </p>
          </div>
          <div>
            {text.map((item) => (
              <motion.div
                variants={save}
                key={item.id}
                className=" border-b-[1px] border-black/35 py-3 xl:py-5"
              >
                <div className="flex items-center ">
                  <p className=" text-[1.2rem] sm:text-[1.7rem] md:text-[2rem] xl:text-4xl font-fredoka text-skin-gray pr-6">
                    0{item.id}
                  </p>
                  <div
                    className={`${
                      item.id === 1 ? "ml-1.5" : ""
                    } border-gray-400 border-l-[1px] xl:p-8 sm:py-6 px-6 py-8 md:py-6`}
                  >
                    <Image
                      className=" xl:w-auto w-16 h-5 md:w-12 md:h-10 sm:w-auto sm:h-auto xl:h-10"
                      src={item.img}
                      alt={item.h1}
                      width={60}
                      height={0}
                    />
                  </div>
                  <div
                    className={`${
                      item.id === 1 ? "" : ""
                    } flex flex-col h-auto space-y-2 xl:space-y-6 `}
                  >
                    <h1 className=" font-poppins text-sm font-semibold">
                      {item.h1}
                    </h1>
                    <p className="text-xs">{item.p}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </motion.div>
      <div className=" mt-10 xl:mt-32 h-auto">
        <Wrapper className=" bg-[#373e73] h-auto py-7 px-3 xl:px-0 xl:p-10">
          <Wrapper className=" h-auto">
            <motion.div
              variants={poips}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" font-poppins text-white"
            >
              <h1 className=" text-2xl font-semibold">Lets Get Talking</h1>
              <form action={handleSend} className=" text-[0.8rem]">
                <motion.div
                  variants={form}
                  className=" grid sm:grid-cols-2 gap-x-4 gap-y-3 mt-4"
                >
                  <div className="space-y-1">
                    <label htmlFor="name">
                      Name <span className=" text-red-500">*</span>
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      id="name"
                      className=" px-3 font-poppins w-full text-black h-9 outline-none border-none border-2 border-gray-300 rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="name">
                      Email<span className=" text-red-500">*</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      value={email}
                      id="email"
                      className=" px-3 font-poppins w-full text-black h-9 outline-none border-none border-2 border-gray-300 rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="name">Region</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      name="region"
                      id=""
                      className=" px-3 font-poppins w-full text-black h-9 outline-none border-none border-2 border-gray-300 rounded-sm"
                    >
                      {regions.map((region) => (
                        <option key={region.id} value={region.name}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="name">Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      name="country"
                      id=""
                      className=" px-3 font-poppins w-full text-black h-9 outline-none border-none border-2 border-gray-300 rounded-sm"
                    >
                      {countryData.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                      {/* <Places /> */}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="name" className=" text-sm">
                      Phone Number<span className=" text-red-500">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      id="phoneNumber"
                      className=" px-3 font-poppins w-full text-black h-9 outline-none border-none border-2 border-gray-300 rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email">Company Name</label>
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      type="text"
                      id="company-name"
                      className=" px-3 font-poppins w-full text-black h-9 outline-none border-none border-2 border-gray-300 rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message">Message</label>
                    <textarea
                      onChange={(e) => setMessages(e.target.value)}
                      value={messages}
                      name="message"
                      id="message"
                      className="w-full focus:outline-none text-black  h-20 border-2 border-gray-300 rounded-sm"
                    ></textarea>
                  </div>
                </motion.div>

                <div className=" sm:float-right sm:-mt-12 mt-5">
                  <button className=" bg-yellow-500 hover:bg-slate-700 w-28 h-10 rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </Wrapper>
        </Wrapper>
      </div>
      <Footer />
    </main>
  );
}

export default Service;
