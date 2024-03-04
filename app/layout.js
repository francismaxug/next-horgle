import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
export const metadata = {
  title: "Create Next App",
  description: "J.K Horggle transport and services limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div id="modal"> </div>
        <Nav />
        {/* <div className="mt-24 h-8 sm:bg-blue-500 md:bg-red-500 lg:bg-green-400 xl:bg-slate-600 2xl:bg-violet-500 bg-black"></div> */}
        {children}
       
      </body>
    </html>
  );
}
