import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { PackageOpenIcon, ShoppingBag } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div
      className="bg-black w-full h-[200px] shadow px-5 py-2 flex mt-40"
    >
      <img alt="logo" src="/images/jetmart_logo.jpeg" className="md:h-32 h-20 md:mt-8 mt-14 mg:ml-0 ml-8" />

      <div className="flex gap-5 ml-[250px] mt-2">
        
      </div>

    </div>
  );
}
