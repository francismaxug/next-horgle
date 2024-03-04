"use client";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
const poips = {
  hidden: { y: 10 },
  visible: {
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};
const childv = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};
function Footer() {
  return (
    <motion.footer className="mt-16 bg-white">
      <Wrapper>
        <motion.div
          variants={poips}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" grid grid-cols-3 gap-8 m-auto py-12  w-[65rem] mt-8"
        >
          <motion.div
            variants={childv}
            className=" space-y-6 bg-skin-footer font-poppins text-sm"
          >
            <h1 className=" text-skin-textblack/80 font-medium pl-2">
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

              <p>
                Community 25 Junction;
                <br />
                200 meters after the Kpone Barrier, <br /> on the Tema- Aflao
                Road, <br /> popularly known as Tanker Yard
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childv}
            className=" space-y-6 bg-skin-footer font-poppins text-sm"
          >
            <h1 className=" text-skin-textblack/80 font-medium pl-2">
              Postal Address:
            </h1>
            <div className=" flex text-skin-gray gap-x-3 text-xs leading-[1.3rem]">
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

              <p>
                JK Horgle Transport & Co Ltd <br />
                P.O. Box CE 11838 <br /> Tema – Accra, Ghana
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childv}
            className=" space-y-6 bg-skin-footer font-poppins text-sm"
          >
            <h1 className=" text-skin-textblack/80 font-medium pl-2">
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
                  <p>
                    General Inquiries: +233 302921162 <br />
                    Customer Service: +233 303910113 <br />
                  </p>{" "}
                </div>
                <div className=" flex">
                  <Image src="/email1.png" className="w-[1.1rem] h-[1.1rem]" alt="" width={100} height={100} />
                  <p>
                    Email: info@horgletrasnport.com <br />{" "}
                    cservice@horgletransport.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <hr className="mx-auto w-[65rem] mt-16" />
        <div className=" text-skin-gray text-center mt-3 text-xs font-poppins">
          {" "}
          Copyright &copy;{new Date().getFullYear()} JK Horgle Transport & Co
          Limited
        </div>
      </Wrapper>
    </motion.footer>
  );
}

export default Footer;
