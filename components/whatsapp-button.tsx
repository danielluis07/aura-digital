"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 350;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511942881849";
    const message =
      "Olá! Gostaria de saber mais sobre os serviços da Aura Digital.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className={cn(
        "z-50 cursor-pointer transition-opacity",
        isSticky
          ? "fixed top-80 right-5 xl:right-35"
          : "absolute bottom-4 right-5 xl:right-35"
      )}>
      <div className="transition-transform hover:scale-110">
        <Image
          src="/images/whats.png"
          alt="WhatsApp"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
}
