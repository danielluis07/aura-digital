"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Shield, Target, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Confiança & Ética",
    description:
      "Construindo presença digital com os mais altos padrões éticos e em conformidade regulatória.",
    icon: Shield,
    background: "bg-secondary",
  },
  {
    title: "Precisão",
    description:
      "Cada mensagem elaborada com precisão e atenção aos detalhes que a sua profissão exige.",
    icon: Target,
    background: "bg-accent",
  },
  {
    title: "Autoridade",
    description:
      "Estabelecendo sua credibilidade e expertise em cada ponto de contato digital.",
    icon: Crown,
    background: "bg-[#5787DB]",
  },
];

const MotionCard = motion.create(Card);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reduced motion check for better performance
  const prefersReducedMotion = useReducedMotion();

  // Simplified parallax effects - fewer transforms
  const heroImageY = useTransform(scrollYProgress, [0, 1], [30, -30]); // Reduced range
  const textX = useTransform(scrollYProgress, [0, 1], [-15, 15]); // Reduced range

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      ref={containerRef}>
      {/* Simplified static background - no animation */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full mx-auto">
          {/* Hero section with optimized parallax */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
            {/* Text content - mobile-first approach */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={prefersReducedMotion ? {} : { x: textX }}
              className="order-2 lg:order-1">
              <motion.h2
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 sm:mb-8 text-balance leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                Quem somos
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 sm:space-y-6">
                {/* Simplified progress bar - responsive width */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-4 sm:mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />

                <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed">
                  Na{" "}
                  <span className="font-semibold text-primary">
                    Aura Digital
                  </span>
                  , acreditamos que a forma como você se apresenta é parte
                  essencial da sua credibilidade.
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Por isso, desenvolvemos estratégias de comunicação
                  detalhistas, éticas e inteligentes para profissionais e
                  empresas que buscam transmitir confiança e autoridade em cada
                  interação digital.
                </p>
              </motion.div>
            </motion.div>

            {/* Hero image - mobile optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={prefersReducedMotion ? {} : { y: heroImageY }}
              className="relative order-1 lg:order-2">
              <motion.div
                className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] lg:h-[500px] group"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                {/* Responsive glow effect */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl sm:rounded-2xl opacity-60" />

                {/* Main image */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                  <Image
                    src="/images/quem-somos.webp"
                    alt="Equipe de saúde profissional colaborando"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                {/* Single decorative element - conditional animation and responsive */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Optimized values cards - mobile grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <MotionCard
                    key={index}
                    className="group border-0 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-card/90 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={
                      prefersReducedMotion
                        ? {}
                        : {
                            y: -4,
                            transition: { duration: 0.2, ease: "easeOut" },
                          }
                    }>
                    <CardContent className="pt-6 sm:pt-8 pb-6 px-4 sm:px-6 text-center">
                      {/* Responsive icon container */}
                      <motion.div
                        className="relative mb-4 sm:mb-6 mx-auto"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.1 + index * 0.05,
                          ease: "easeOut",
                        }}>
                        {/* Responsive gradient background */}
                        <div
                          className={cn(
                            "w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-lg sm:rounded-xl flex items-center justify-center shadow-md",
                            value.background
                          )}>
                          <Icon
                            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                      </motion.div>

                      <motion.h3
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.05,
                        }}>
                        {value.title}
                      </motion.h3>

                      <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                        {value.description}
                      </p>

                      {/* Simplified animated underline - responsive */}
                      <motion.div
                        className={cn(
                          "mt-3 sm:mt-4 h-0.5 rounded-full mx-auto",
                          value.background
                        )}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "40%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </CardContent>
                  </MotionCard>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Single background orb with conditional animation - hidden on mobile for performance */}
      {!prefersReducedMotion && (
        <motion.div
          className="hidden lg:block absolute bottom-20 -left-20 w-60 h-60 bg-primary/3 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </section>
  );
}
