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

const expertise = [
  "Profissionais da Saúde",
  "Instituições Médicas",
  "Conformidade Regulatória",
  "Padrões Éticos",
];

const MotionCard = motion.create(Card);

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Simplified parallax - only if motion is enabled
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      ref={containerRef}>
      {/* Static background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(120, 119, 198, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile-optimized header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16">
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#417cde] mb-4 sm:mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Nossa Experiência
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Mobile-optimized left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1">
              <MotionCard
                className="border-0 shadow-md sm:shadow-lg backdrop-blur-sm bg-card/90 overflow-hidden"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -4,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }
                }>
                {/* Static gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fefefe] via-[#508eb3] to-[#3974aa] opacity-20" />

                <CardContent className="p-6 sm:p-8 lg:p-10 relative z-10">
                  {/* Main text - mobile optimized */}
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed">
                      Nossa experiência é especialmente{" "}
                      <span className="font-semibold text-[#417cde]">
                        sólida na área da saúde
                      </span>
                      , atendendo tanto profissionais quanto empresas que lidam
                      com{" "}
                      <span className="font-semibold text-[#417cde]">
                        altos padrões éticos e regulatórios
                      </span>
                      . Nosso método, baseado em estratégia, precisão e
                      sofisticação, garante credibilidade e um rigor
                      indispensável em todos os projetos que conduzimos.
                    </p>
                  </motion.div>

                  {/* Mobile-optimized expertise grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {expertise.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 group/item"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + index * 0.05,
                          ease: "easeOut",
                        }}>
                        {/* Mobile-optimized checkmark */}
                        <motion.div
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + index * 0.05,
                            ease: "easeOut",
                          }}>
                          <svg
                            className="w-full h-full text-[#417cde]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>

                        <span className="text-sm sm:text-base text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile-optimized accent line */}
                  <motion.div
                    className="mt-5 sm:mt-6 h-0.5 bg-gradient-to-r from-[#fefefe] via-[#508eb3] to-[#3974aa] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: "easeOut",
                    }}
                  />
                </CardContent>
              </MotionCard>
            </motion.div>

            {/* Mobile-optimized right image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative order-1 lg:order-2">
              <motion.div
                className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}>
                {/* Mobile-optimized frame */}
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#fefefe] via-[#508eb3] to-[#3974aa] rounded-xl sm:rounded-2xl opacity-20 -z-10" />

                {/* Image container with conditional parallax */}
                <motion.div
                  className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl"
                  style={prefersReducedMotion ? {} : { y: imageY }}>
                  <Image
                    src="/images/experiencia.webp"
                    alt="Profissional de saúde utilizando ferramentas digitais"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    className="object-cover"
                    priority
                  />

                  {/* Static overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#508eb3]/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </motion.div>

                {/* Responsive decorative element with conditional animation */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent/15 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
