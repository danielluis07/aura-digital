"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Vocês só atendem médicos?",
    answer:
      "Não. Embora nossa expertise na saúde seja consolidada, atuamos também em outros segmentos que exigem rigor e sofisticação.",
    gradient: "from-red-400 to-cyan-400",
  },
  {
    question: "Preciso produzir muito conteúdo?",
    answer:
      "Não. Nossa metodologia otimiza seu tempo para que você tenha uma presença digital consistente sem sobrecarga.",
    gradient: "from-red-400 to-cyan-400",
  },
  {
    question: "Vocês fazem tráfego pago?",
    answer:
      "Sim, quando identificamos a necessidade, adicionamos essa estratégia ao orçamento de forma transparente e gerenciamos todo o processo com parceiros especializados.",
    gradient: "from-red-400 to-cyan-400",
  },
];

const MotionAccordionItem = motion.create(AccordionItem);

export function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Simplified parallax - only if motion enabled
  const backgroundY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      ref={containerRef}>
      {/* Simplified static background pattern - hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute inset-0 opacity-[0.02]"
        style={prefersReducedMotion ? {} : { y: backgroundY }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(120, 119, 198, 0.3) 40px,
              rgba(120, 119, 198, 0.3) 80px
            )`,
          }}
        />
      </motion.div>

      {/* Background element - hidden on mobile for performance */}
      {!prefersReducedMotion && (
        <motion.div
          className="hidden lg:block absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-accent/8 to-primary/8 rounded-full"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Mobile-optimized header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12">
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 text-balance leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Perguntas Frequentes
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Perguntas comuns sobre nossos serviços e abordagem.
            </motion.p>

            {/* Mobile-optimized accent line */}
            <motion.div
              className="mt-4 sm:mt-6 h-0.5 w-16 sm:w-20 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "60px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          {/* Mobile-optimized Accordion */}
          <Accordion
            type="single"
            collapsible
            className="space-y-3 sm:space-y-4"
            value={openItem}
            onValueChange={setOpenItem}>
            {faqs.map((faq, index) => (
              <MotionAccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-card/85 backdrop-blur-sm rounded-lg sm:rounded-xl border-0 shadow-sm sm:shadow-md hover:shadow-md sm:hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -2,
                        transition: { duration: 0.2 },
                      }
                }>
                {/* Mobile-optimized gradient accent bar */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${faq.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: openItem === `item-${index}` ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />

                <AccordionTrigger className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-left hover:no-underline group relative">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Mobile-optimized number badge */}
                    <motion.div
                      className={`flex-shrink-0 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${faq.gradient} flex items-center justify-center text-white font-bold shadow-sm sm:shadow-md`}
                      animate={
                        prefersReducedMotion
                          ? {}
                          : {
                              rotate: openItem === `item-${index}` ? 180 : 0,
                            }
                      }
                      transition={{ duration: 0.3, ease: "easeOut" }}>
                      <span className="text-xs xs:text-sm sm:text-base">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>

                    <span className="font-semibold text-base xs:text-lg sm:text-xl text-primary group-hover:text-accent transition-colors duration-200 leading-tight">
                      {faq.question}
                    </span>
                  </div>

                  {/* Mobile-optimized chevron */}
                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            rotate: openItem === `item-${index}` ? 180 : 0,
                          }
                    }
                    transition={{ duration: 0.2 }}
                    className="ml-2 sm:ml-4 flex-shrink-0">
                    {/* The chevron icon is handled by shadcn */}
                  </motion.div>
                </AccordionTrigger>

                <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: openItem === `item-${index}` ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="pl-11 xs:pl-12 sm:pl-14 lg:pl-16">
                    <p className="text-muted-foreground text-pretty leading-relaxed text-sm xs:text-base sm:text-lg">
                      {faq.answer}
                    </p>

                    {/* Mobile-optimized decorative element */}
                    <motion.div
                      className={`mt-2 sm:mt-3 h-px bg-gradient-to-r ${faq.gradient} opacity-15`}
                      initial={{ width: 0 }}
                      animate={{
                        width: openItem === `item-${index}` ? "50%" : "0%",
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </motion.div>
                </AccordionContent>

                {/* Static hover effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none`}
                />
              </MotionAccordionItem>
            ))}
          </Accordion>

          {/* Bottom decorative element - simplified for mobile */}
          {!prefersReducedMotion && (
            <motion.div
              className="mt-8 sm:mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="flex gap-1.5 sm:gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-accent to-primary"
                    animate={{
                      y: [0, -4, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
