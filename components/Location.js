import Image from "next/image";

const Location = () => {
  return (
    <div className=" flex flex-col justify-center items-center cursor-pointer">
      <div className=" mt-16 animate-bounce">
        {/* <Image src="/ml.png" alt="" width={0} height={0} className=" w-4 h-4" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="lg:w-3 w-2 h-4 lg:h-6 stroke-red-600 fill-yellow-500"
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
      </div>
      <span className="text-3xl -mt-[2rem] lg:text-5xl lg:-mt-[2.85rem] text-red-500">
        .
      </span>
    </div>
  );
};

export default Location;
