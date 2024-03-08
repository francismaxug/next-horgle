"use client";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Places from "../Places";
import { useRef, useState, useEffect } from "react";
import { regions } from "@/loops/textsvg";
import { motion, useScroll, useTransform } from "framer-motion";
import Send from "@/app/Send";
import { send } from "../actions/send";
import { toast } from "react-toastify";
function Contact() {
  const ref = useRef(null);
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
    toast.success("Message sent!");
    setCountry("");
    setEmail("");
    setName("");
    setMessages("");
    setPhone("");
    setRegion("");
    setCompany("");
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
    <main className=" mt-8">
      <motion.div
        ref={ref}
        style={{ y: backgroundY }}
        className=" relative z-0 lg:h-[30rem] h-[18.5rem] md:h-[26rem] text-center flex justify-center items-center"
      >
        <Image
          src="/men5.jpg"
          alt="people"
          width={1000}
          className="w-full h-full absolute z-10 object-cover object-center"
          height={1000}
          quality={80}
        />
        <motion.h1
          style={{ y: textY }}
          className=" text-white text-center font-Carnas text-xl font-bold lg:text-3xl relative z-10"
        >
          Contact Lovely.
        </motion.h1>
      </motion.div>
      <div className=" relative z-10 bg-white px-3 xl:px-0">
        <Wrapper className=" h-auto mt-20 py-8 grid gap-y-7 xl:gap-y-0 md:grid-cols-2 gap-x-32">
          <div className=" space-y-10">
            <h1 className=" text-black font-Carnas lg:text-[1.8rem] font-bold">
              J.K Horgle Transport And Company Limited Corporate Office
            </h1>
            <div className=" space-y-6 bg-skin-footer font-Carnas text-sm">
              <h1 className=" text-skin-textblack/80 font-bold pl-2">
                Physical Address:
              </h1>
              <div className=" flex text-skin-gray gap-x-3 text-xs leading-[1.3rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.2rem] h-[1.2rem] stroke-amber-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <p className=" font-poppins">
                  Community 25 Junction;
                  <br />
                  200 meters after the Kpone Barrier, <br /> on the Tema- Aflao
                  Road, <br /> popularly known as Tanker Yard
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-5 xl:space-y-16">
            <div className=" ml-1 space-y-6 bg-skin-footer font-Carnas text-sm">
              <h1 className=" text-skin-textblack/80 font-bold">
                Postal Address:
              </h1>
              <div className=" flex text-skin-gray gap-x-5 text-xs leading-[1.3rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.1rem] h-[1.1rem] stroke-amber-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <p className=" font-poppins">
                  JK Horgle Transport & Co Ltd <br />
                  P.O. Box CE 11838 <br /> Tema – Accra, Ghana
                </p>
              </div>
            </div>
            <div className=" space-y-6 bg-skin-footer font-Carnas text-sm">
              <h1 className=" text-skin-textblack/80 font-bold pl-2">
                Phone & Email:
              </h1>
              <div className=" flex text-skin-gray gap-x-2 text-xs leading-[1.3rem]">
                <div className=" flex flex-col space-y-2">
                  <div className=" flex gap-4 ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[1.1rem] h-[1.1rem] stroke-amber-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                      />
                    </svg>
                    <p className=" font-poppins">
                      General Inquiries: +233 302921162 <br />
                      Customer Service: +233 303910113 <br />
                    </p>{" "}
                  </div>
                  <div className=" flex">
                    <Image src="/email1.png" alt="" width={60} height={0} />
                    <p className=" font-poppins">
                      Email: info@horgletrasnport.com <br />{" "}
                      cservice@horgletransport.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="mb-10 h-auto xl:mt-16">
          <Wrapper className="  h-auto xlp-10 py-7 px-3 xl:px-0">
            <Wrapper className=" h-auto">
              <div className=" font-Carnas text-black">
                <h1 className=" text-xl lg:text-2xl font-Carnas font-bold">
                  Contact Us
                </h1>
                <form action={handleSend} className=" text-[0.8rem]">
                  <div className=" grid sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                    <div className="space-y-1">
                      <label htmlFor="name">
                        Name <span className=" text-red-500">*</span>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        className=" px-3 font-poppins w-full text-black h-9 bg-orange-200/5  border-black border outline-none rounded-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="name">
                        Email<span className=" text-red-500">*</span>
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className=" px-3 font-poppins w-full  bg-orange-200/5  border-black border text-black h-9 outline-none  rounded-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="name">Region</label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        name="region"
                        id=""
                        className=" px-3 font-poppins w-full  bg-orange-200/5  border-black border text-black h-9 outline-none  rounded-sm"
                      >
                        {regions.map((region) => (
                          <option key={region.id} value={region.id}>
                            {region.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="name">Country</label>
                      <select
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        id=""
                        className=" px-3 font-poppins w-full  bg-orange-200/5  border-black border text-black h-9 outline-none  rounded-sm"
                      >
                        {countryData.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
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
                        className=" px-3 font-poppins w-full  bg-orange-200/5  border-black border text-black h-9 outline-none  rounded-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email">Company Name</label>
                      <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        type="text"
                        id="company-name"
                        className=" px-3 font-poppins w-full  bg-orange-200/5  border-black border text-black h-9 outline-none  rounded-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="message">Message</label>
                      <textarea
                        value={messages}
                        onChange={(e) => setMessages(e.target.value)}
                        name="message"
                        id="message"
                        className="w-full focus:outline-none  bg-orange-200/5 border-black border text-black  h-20  rounded-sm"
                      ></textarea>
                    </div>
                  </div>

                  <div className=" sm:float-right sm:-mt-12 mt-5">
                    <button className=" bg-yellow-500 hover:bg-slate-700 w-28 h-10 rounded-md">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Wrapper>
          </Wrapper>
        </div>
      </div>
    </main>
  );
}

export default Contact;
