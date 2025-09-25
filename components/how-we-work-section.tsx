"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const steps = [
  {
    title: "Imersão no seu universo",
    description:
      "Entendemos sua realidade, seus objetivos e o público que você quer alcançar.",
    image: "/images/imersao.webp",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Planejamento sob medida",
    description:
      "Estruturamos linguagem, estética e estratégia de forma clara e prática.",
    image: "/images/planejamento.webp",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Produção Otimizada",
    description:
      "Conteúdo para semanas em apenas uma sessão mensal, itinerante e adaptável à sua agenda e local de atuação.",
    image:
      "https://images.unsplash.com/photo-1741236688074-46985787790c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "Publicação Inteligente",
    description:
      "Conteúdos aprovados previamente, de forma simplificada, para manter a coerência sem burocracia.",
    image: "/images/publicacao-inteligente.webp",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Acompanhamento Contínuo",
    description:
      "Resultados monitorados, relatórios claros e ajustes precisos para evolução constante.",
    image: "/images/acompanhamento.webp",
    accent: "from-indigo-500 to-purple-500",
  },
];

export function HowWeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Simplified parallax - only one transform
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="projects"
      className="py-24 overflow-hidden relative px-5"
      ref={containerRef}>
      {/* Static background */}
      <div className="absolute inset-0 opacity-15 bg-gradient-to-r from-[#fefefe] via-[#68d7db] to-[#5a9fe4]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Como Trabalhamos
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nosso processo em 5 etapas garante resultados excepcionais enquanto
            respeita seu tempo e expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-20 last:mb-0">
              {index % 2 === 0 ? (
                // Left-aligned layout (even indices)
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <motion.div
                    className="order-2 lg:order-1"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className="space-y-6">
                      <h3 className="text-3xl sm:text-4xl font-bold text-primary">
                        {step.title}
                      </h3>

                      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Simplified underline */}
                      <motion.div
                        className={`h-0.5 bg-gradient-to-r ${step.accent} rounded-full`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "30%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Simplified image container */}
                  <motion.div
                    className="order-1 lg:order-2 relative group"
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}>
                    <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                      {/* Static gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-15 z-10 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>

                    {/* Static decorative element */}
                    <motion.div
                      className={`absolute -z-10 -bottom-3 -right-3 w-full h-full bg-gradient-to-br ${step.accent} rounded-2xl opacity-8`}
                      style={prefersReducedMotion ? {} : { y }}
                    />
                  </motion.div>
                </div>
              ) : (
                // Right-aligned layout (odd indices)
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Simplified image container */}
                  <motion.div
                    className="relative group"
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}>
                    <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                      {/* Static gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-15 z-10 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover"
                      />
                    </div>

                    {/* Static decorative element */}
                    <motion.div
                      className={`absolute -z-10 -bottom-3 -left-3 w-full h-full bg-gradient-to-br ${step.accent} rounded-2xl opacity-8`}
                      style={prefersReducedMotion ? {} : { y }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className="space-y-6">
                      <h3 className="text-3xl sm:text-4xl font-bold text-primary">
                        {step.title}
                      </h3>

                      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Simplified underline */}
                      <motion.div
                        className={`h-0.5 bg-gradient-to-r ${step.accent} rounded-full`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "30%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Simplified connecting line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex justify-center my-12 lg:my-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Single background element with conditional animation */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute top-1/3 -left-0 w-48 h-48 bg-primary/4 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </section>
  );
}
