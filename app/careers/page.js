"use client";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";
function Careers() {
  return (
    <main className=" lg:mt-14 mt-16">
      <div className=" font-poppins sm:h-[17rem]  mt-8 px-4 xl:h-[27rem] lg:mt-28">
        <Wrapper className="  grid h-auto sm:relative sm:grid-cols-3 border-red-400 place-items-center">
          <motion.div
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="sm:absolute lg:w-[43%] md:w-[53%] lg:top-16 sm:top-6 sm:max-w-[58%]  sm:left-0 lg:left-11 lg:h-[12rem] sm:z-30"
          >
            <h1 className=" bg-yellow-500 h-5 sm:w-[70%] md:w-[77%] lg:w-[85%]" />
            <div className="border h-auto mb-4 sm:mb-0 lg:h-[12rem] bg-skin-background py-4 px-3 space-y-2 lg:space-y-5 ">
              <p className=" text-skin-textblack lg:leading-7 text-[0.9rem] font-Carnas md:text-[1.1rem] sm:text-[1rem] lg:text-[1.4rem] xl:text-[1.6rem] font-bold">
                Full petroleum transportation service company
              </p>
              <p className=" sm:text-[0.6rem] text-[0.66rem] lg:text-[0.75rem]">
                We transport products via road to all parts of Ghana and West
                Africa. With our stellar safety record, we aim to ensure a
                hassle free service to all our clients.
              </p>
            </div>
          </motion.div>
          <div className=" sm:col-span-2 sm:w-[20rem] md:w-[26rem] md:h-[15rem] sm:absolute lg:h-[22rem] lg:w-[35rem] xl:w-[38rem] xl:h-[25rem]  sm:h-[13rem] border-2 sm:right-0 top-0 z-10">
            <Image
              src="/smile.jpg"
              width={1000}
              height={1000}
              alt="Careers"
              className="object-cover w-full h-full  object-center"
            />
          </div>
        </Wrapper>
      </div>
      <div className=" lg:mt-10 mt-7  ">
        <Wrapper className=" border-black h-auto py-5 border-b-[1px]">
          <h1 className=" text-center text-skin-textblack font-poppins lg:text-[1.6rem] font-semibold text-[0.9rem]">
            Join Us! Experience Lovely
          </h1>
        </Wrapper>
      </div>
      <div className=" mt-9 lg:mt-16 py-4 xl:py-0 px-3 xl:px-0 h-auto">
        <Wrapper className="space-y-7 h-[20rem] sm:h-[27rem] xl:mb-10 xl:h-[31rem]">
          <h1 className="  text-center text-skin-textblack text-[0.95rem] font-poppins lg:text-[1.6rem] font-semibold">
            Our Locations
          </h1>
          <div className=" h-auto">
            <iframe
              className="h-[15rem] sm:h-[22rem] lg:h-[25rem] xl:h-[28rem] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2057201.9318115725!2d-1.7311660184192978!3d6.49855506016471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207fdd22cb6adf%3A0x393b5fa8ac1b0d4f!2sJ.K.%20Horgle%20Transport%20and%20Co.%20Ltd!5e0!3m2!1sen!2sgh!4v1708764042362!5m2!1sen!2sgh"
              width="1200"
              height="650"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </main>
  );
}

export default Careers;

// function page() {
//   return <div className=" w-full h-60 bg-blue-400 sm:bg-red-400"></div>;
// }

// export default page;
