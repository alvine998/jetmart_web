import Image from "next/image";
import { Inter } from "next/font/google";
import NavHome from "@/components/navbar/NavHome";
import BottomNav from "@/components/navbar/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavHome />

      {/* Banner */}
      <div className="w-full h-[600px] bg-white flex items-center justify-center">
        <img
          alt="product"
          src="/images/bannercth.png"
          className="w-full h-auto"
        />
      </div>

      <div className="px-20 py-10">
        <img
          alt="note"
          src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/keterangan.png?alt=media&token=c2830f42-48c7-412d-8c26-971b7472a69a"
          className="w-full h-auto"
        />
      </div>

      <div className="bg-white w-full h-auto p-2 flex justify-between items-center px-10 mt-10 relative z-0 gap-5">
        <div className="shadow-lg bg-white rounded w-1/2 h-[300px]">
          <h1 className="font-sans text-2xl font-bold text-gray-700 mt-2 ml-10">
            DTF Machine
          </h1>
          <div className="flex justify-between items-center pr-5">
            <img
              alt="product"
              src="/images/machine.png"
              className="relative z-0 -mt-10"
            />
            <button className="bg-white rounded-full border-2 py-1 px-2 w-[250px] relative z-10 mt-10 transition-all duration-200 hover:bg-red-700 hover:text-white">
              Selengkapnya
            </button>
          </div>
        </div>

        <div className="shadow-xl bg-white rounded w-1/2 h-[300px]">
          <h1 className="font-sans text-2xl font-bold text-gray-700 mt-2 ml-10">
            Bahan Baku DTF
          </h1>
          <div className="flex justify-between items-center pr-20">
            <img
              alt="product"
              src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/consum1.png?alt=media&token=ac72e22e-28c2-41a5-9a2d-b5ea94acf68a"
              className="relative z-0 -mt-40 w-full h-[500px]"
            />
            <button className="bg-white rounded-full border-2 py-1 px-2 w-[250px] relative z-10 mt-24 transition-all duration-200 hover:bg-red-700 hover:text-white">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
