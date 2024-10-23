import Image from "next/image";
import { Inter } from "next/font/google";
import NavHome from "@/components/navbar/NavHome";
import BottomNav from "@/components/navbar/BottomNav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jetmart</title>
      </Head>
      <NavHome />

      <div className="w-full h-[600px] bg-white flex items-center justify-center">
        <img
          alt="product"
          src="/images/bannercth.png"
          className="w-full h-auto"
        />
      </div>

      <div className="px-4 sm:px-10 md:px-20 md:py-10 py-2">
        <img
          alt="note"
          src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/keterangan.png?alt=media&token=c2830f42-48c7-412d-8c26-971b7472a69a"
          className="w-full h-auto"
        />
      </div>

      <div className="bg-white w-full h-auto p-2 flex flex-col md:flex-row justify-between items-center md:px-10 mt-10 relative z-0 gap-5">
        {/* First Block */}
        <div className="shadow-lg bg-white rounded w-full md:w-1/2 h-[300px]">
          <h1 className="font-sans text-xl sm:text-2xl font-bold text-gray-700 mt-2 ml-5 md:ml-10">
            DTF Machine
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center pr-5">
            <img
              alt="product"
              src="/images/machine.png"
              className="relative z-0 -mt-10"
            />
            <button className="bg-white rounded-full border-2 py-1 px-2 w-[200px] sm:w-[250px] relative z-10 mt-14 md:mt-10 transition-all duration-200 hover:bg-red-700 hover:text-white">
              Selengkapnya
            </button>
          </div>
        </div>

        {/* Second Block */}
        <div className="shadow-xl bg-white rounded w-full md:w-1/2 h-[300px] md:mt-0 mt-10">
          <h1 className="font-sans text-xl sm:text-2xl font-bold text-gray-700 mt-2 ml-5 md:ml-10">
            Bahan Baku DTF
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:pr-20">
            <img
              alt="product"
              src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/consum1.png?alt=media&token=ac72e22e-28c2-41a5-9a2d-b5ea94acf68a"
              className="relative z-0 -mt-10 md:-mt-40 w-full md:w-auto h-[300px] md:h-[500px]"
            />
            <button className="bg-white rounded-full border-2 py-1 px-2 w-[200px] sm:w-[250px] relative z-10 mt-5 md:mt-24 transition-all duration-200 hover:bg-red-700 hover:text-white">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
