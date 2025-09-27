"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

const phoneNumber = "5511942881849";
const message =
  "Olá! Gostaria de saber mais sobre os serviços da Aura Digital.";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "estrategiasaura@gmail.com",
    href: "mailto:estrategiasaura@gmail.com",
    gradient: "from-red-400 to-cyan-400",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 11 94288-1849",
    href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    gradient: "from-red-400 to-cyan-400",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo",
    href: "#",
    gradient: "from-red-400 to-cyan-400",
  },
];

const MotionCard = motion.create(Card);
const MotionButton = motion.create(Button);

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511942881849";
    const message =
      "Olá! Gostaria de saber mais sobre os serviços da Aura Digital.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const prefersReducedMotion = useReducedMotion();

  // Single simplified parallax
  const cardY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      ref={containerRef}>
      {/* Simplified static background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4" />
        {!prefersReducedMotion && (
          <motion.div
            className="hidden sm:block absolute inset-0 opacity-60"
            animate={{
              background: [
                "radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 30%, rgba(120, 119, 198, 0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.08) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </div>

      {/* Simplified floating particles - hidden on mobile */}
      {!prefersReducedMotion &&
        [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="hidden lg:block absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Mobile-optimized header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12">
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#417cde] mb-4 sm:mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Fale Conosco
            </motion.h2>
          </motion.div>

          {/* Mobile-optimized main card */}
          <MotionCard
            className="border-0 shadow-md sm:shadow-lg backdrop-blur-sm bg-card/90 overflow-hidden relative rounded-xl sm:rounded-2xl"
            style={prefersReducedMotion ? {} : { y: cardY }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}>
            {/* Simplified gradient border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/15 via-primary/8 to-accent/15"
              animate={{
                opacity: isHovered ? 0.25 : 0.12,
              }}
              transition={{ duration: 0.3 }}
            />

            <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                {/* Left Column: Text and CTA - mobile optimized */}
                <div className="text-center lg:text-left mb-10 sm:mb-12 lg:mb-0">
                  <motion.h3
                    className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#417cde] mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    Projetos únicos, para clientes únicos.
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <p className="text-base sm:text-lg text-foreground/80 mb-4 sm:mb-6 text-pretty leading-relaxed">
                      Na{" "}
                      <span className="font-semibold text-[#417cde]">
                        Aura Digital
                      </span>
                      , não acreditamos em pacotes prontos. Cada projeto é
                      desenhado sob medida para garantir que sua presença
                      digital seja eficiente, sofisticada e sem desperdícios.
                    </p>

                    <p className="text-base sm:text-lg mb-8 sm:mb-10 text-pretty leading-relaxed text-[#417cde]">
                      Vamos criar uma proposta personalizada, sem formalidades e
                      à altura do que você procura.
                    </p>
                  </motion.div>

                  {/* Mobile-optimized CTA Button */}
                  <motion.div
                    className="flex justify-center lg:justify-start"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <MotionButton
                      size="lg"
                      className="text-base sm:text-lg px-6 bg-[#417cde] sm:px-8 py-4 sm:py-6 group relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto min-h-[48px]"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.2 }}>
                      {/* Simplified hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-accent/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <div
                          onClick={handleWhatsAppClick}
                          className="hidden xs:inline">
                          Obter Proposta Personalizada
                        </div>
                        <div
                          onClick={handleWhatsAppClick}
                          className="xs:hidden">
                          Obter Proposta
                        </div>
                        <motion.div
                          animate={prefersReducedMotion ? {} : { x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                      </span>
                    </MotionButton>
                  </motion.div>
                </div>

                {/* Right Column: Contact Info - mobile optimized */}
                <div className="flex flex-col justify-center items-center">
                  <div className="grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-8 w-full">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.href}
                        className="group flex flex-col items-center gap-2 sm:gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-accent/5 transition-colors duration-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        whileHover={prefersReducedMotion ? {} : { y: -3 }}>
                        {/* Mobile-optimized icon container */}
                        <motion.div
                          className="relative"
                          whileHover={
                            prefersReducedMotion ? {} : { scale: 1.1 }
                          }
                          transition={{ duration: 0.2 }}>
                          {/* Static background glow */}
                          <div
                            className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-br ${info.gradient} opacity-20 rounded-full`}
                          />

                          <div
                            className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center shadow-sm sm:shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                            <info.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                          </div>
                        </motion.div>

                        <div className="text-center">
                          <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1 uppercase tracking-wider">
                            {info.label}
                          </p>
                          <p className="text-xs xs:text-sm font-medium text-foreground group-hover:text-[#417cde] transition-colors duration-200 leading-tight">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Corner decorations - hidden on mobile for performance */}
            {!prefersReducedMotion && (
              <>
                <motion.div
                  className="hidden sm:block absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/8 to-transparent rounded-br-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.1, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="hidden sm:block absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-primary/8 to-transparent rounded-tl-full"
                  animate={{
                    scale: [1.05, 1, 1.05],
                    opacity: [0.15, 0.1, 0.15],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                />
              </>
            )}
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
