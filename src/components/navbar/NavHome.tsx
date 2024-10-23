import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  EclipseIcon,
  EllipsisVerticalIcon,
  PackageOpenIcon,
  ShoppingBag,
  XCircleIcon,
} from "lucide-react";

export default function NavHome() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSide, setOpenSide] = useState<boolean>(false);
  const dropdownRef: any = useRef(null); // Reference to the dropdown element
  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  let tabs = [
    {
      name: "Beranda",
      current: "/",
      href: "/",
    },
    {
      name: "Produk",
      current: "/products",
      href: "/products",
      children: [
        {
          name: "Mesin Printing",
          current: "/products/machine",
          href: "/products/machine",
        },
        {
          name: "Bahan Baku",
          current: "/products/material",
          href: "/products/material",
        },
        {
          name: "Custom Kaos",
          current: "/products/tshirt",
          href: "/products/tshirt",
        },
      ],
    },
    {
      name: "Tentang Kami",
      current: "/about-us",
      href: "/about-us",
    },
    {
      name: "Galeri",
      current: "/gallery",
      href: "/gallery",
    },
    {
      name: "Hubungi Kami",
      current: "/contact-us",
      href: "/contact-us",
    },
  ];
  return (
    <div
      className="bg-black w-full md:h-16 h-20 shadow md:px-10 px-2 md:py-2 py-4 flex md:gap-0 gap-2"
      ref={dropdownRef}
    >
      <img
        alt="logo"
        src="/images/jetmart_logo.jpeg"
        className="md:h-12 h-7 md:mt-0 mt-3"
      />

      <div className="gap-5 ml-[250px] mt-2 md:flex hidden">
        {tabs?.map((v: any, i: number) => (
          <div key={i}>
            <a
              href={v?.href}
              className={`text-xl font-sans font-semibold transition-all duration-200 ${
                v?.current == router.pathname
                  ? "text-red-700"
                  : "text-white hover:text-red-700"
              }`}
            >
              {v?.name}
            </a>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="md:ml-[150px] ml-0 md:mt-1 mt-2">
        <input
          type="text"
          placeholder="Cari disini"
          className="md:p-2 p-1 rounded-full shadow transition-all duration-200 pl-4 focus:outline-none focus:ring focus:ring-red-700"
        />
      </div>

      {/* Cart */}
      <div className="md:ml-10 ml-0 flex md:gap-3 gap-0 items-center">
        <button
          className="text-white"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ShoppingBag className="w-10" />
        </button>
        <div className="w-5 h-5 rounded-full bg-red-600 flex justify-center items-center md:ml-0 -ml-5 md:mt-0 -mt-4">
          <p className="text-white text-xs">0</p>
        </div>
      </div>

      <div className="flex md:gap-3 gap-0 items-center md:hidden">
        <button
          className="text-white"
          type="button"
          onClick={() => {
            setOpenSide(!openSide);
          }}
        >
          <EllipsisVerticalIcon className="w-5" />
        </button>
      </div>
      <div
        className={`absolute inset-0 w-0 bg-white shadow transition-all duration-200 h-full ease-in-out ${
          openSide ? "w-[20rem] p-2" : ""
        }`}
      >
        <div className={openSide ? "block" : "hidden"}>
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setOpenSide(!openSide);
                }}
              >
                <XCircleIcon />
              </button>
            </div>
            {tabs?.map((v: any, i: number) => (
              <div key={i}>
                <a
                  href={v?.href}
                  className={`text-xl text-center font-sans font-semibold transition-all duration-200 ${
                    v?.current == router.pathname
                      ? "text-red-700"
                      : "text-black hover:text-red-700"
                  }`}
                >
                  {v?.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dropdown panel */}
      {isOpen && (
        <div
          className={`origin-top-right absolute right-5 mt-12 w-[300px] h-[400px] overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-transform duration-200 ease-out ${
            isOpen
              ? "transform opacity-100 scale-100"
              : "transform opacity-0 scale-95"
          }`}
        >
          <div className="p-2">
            <div className="mt-[150px] flex flex-col gap-2 justify-center items-center">
              <p className="text-center font-sans text-gray-500 font-semibold">
                Keranjang Masih Kosong!
              </p>
              <PackageOpenIcon className="text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
