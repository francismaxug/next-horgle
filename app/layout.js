import "../styles/globals.css";
import Nav from "@/components/Nav";

import 'react-toastify/dist/ReactToastify.css';

import { Bounce, ToastContainer, toast } from "react-toastify";
export const metadata = {
  title: "Create Next App",
  description: "J.K Horggle transport and services limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="modal"> </div>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          transition= {Bounce}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" 
/> */}
        <Nav />
        {/* <div className="mt-24 h-8 sm:bg-blue-500 md:bg-red-500 lg:bg-green-400 xl:bg-slate-600 2xl:bg-violet-500 bg-black"></div> */}
        {children}
      </body>
    </html>
  );
}
