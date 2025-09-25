"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navigationLinks = [
  { id: "1", label: "Home", sectionId: "home" },
  { id: "2", label: "Projetos", sectionId: "projects" },
  { id: "3", label: "Serviços", sectionId: "services" },
  { id: "4", label: "Sobre", sectionId: "about" },
  { id: "5", label: "Contato", sectionId: "contact" },
];

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (linkId: string) => {
    setIsOpen(false);
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
    <div className="flex justify-end fixed top-0 left-0 right-0 z-50 sm:hidden h-12 px-5">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu className="text-primary" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <VisuallyHidden.Root>
              <SheetTitle>Aura Digital</SheetTitle>
            </VisuallyHidden.Root>
            <VisuallyHidden.Root>
              <SheetDescription>Navegação do site</SheetDescription>
            </VisuallyHidden.Root>
            <Image
              src="/images/logo.webp"
              alt="Aura Digital Logo"
              width={120}
              height={40}
              priority
            />
          </SheetHeader>
          <ul className="flex flex-col gap-4 mt-8 text-lg px-5">
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:underline cursor-pointer">
                {link.label}
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
