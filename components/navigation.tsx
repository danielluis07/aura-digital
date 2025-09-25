"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { id: "1", label: "Home", sectionId: "home" },
  { id: "2", label: "Projetos", sectionId: "projects" },
  { id: "3", label: "Serviços", sectionId: "services" },
  { id: "4", label: "Sobre", sectionId: "about" },
  { id: "5", label: "Contato", sectionId: "contact" },
];

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("1");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 550;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Find the corresponding navigation link
          const matchingLink = navigationLinks.find(
            (link) => link.sectionId === sectionId
          );

          if (matchingLink) {
            setActiveLink(matchingLink.id);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    navigationLinks.forEach((link) => {
      const element = document.getElementById(link.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);

    // Find the section and scroll to it
    const link = navigationLinks.find((l) => l.id === linkId);
    if (link && link.sectionId) {
      const element = document.getElementById(link.sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div
      className={cn(
        "flex justify-center w-full z-40 max-sm:hidden",
        isSticky ? "fixed top-4" : "absolute top-[650px]"
      )}>
      <nav className="px-4 py-3 bg-black/20 backdrop-blur-lg w-[500px] rounded-full border border-white/10 shadow-lg">
        <ul className="flex justify-between w-full text-white">
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                "px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer",
                activeLink === link.id
                  ? "bg-primary shadow-md"
                  : "hover:bg-white/10"
              )}
              onClick={() => handleLinkClick(link.id)}>
              {link.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
