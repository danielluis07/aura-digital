"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const solutions = [
  {
    image: "/images/direcao-estrategica.webp",
    title: "Direção Estratégica",
    description:
      "Diagnóstico completo, definição de pilares, tom de voz, mensagens-chave e objetivos claros para sua presença digital.",
    color: "from-blue-600/20 to-purple-600/20",
  },
  {
    image: "/images/producao-conteudo-premium.webp",
    title: "Produção de Conteúdo Premium",
    description:
      "Captação mensal profissional de vídeos e fotos; roteiros precisos; edição refinada com cortes dinâmicos e legendas adequadas.",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    image: "/images/gestao-presenca-digital.webp",
    title: "Gestão de Presença Digital",
    description:
      "Calendário editorial organizado, administração de postagens e relatórios com insights acionáveis — sempre mediante aprovação prévia simplificada, feita de forma prática e rápida para otimizar seu tempo, sem perder o controle sobre o que é publicado.",
    color: "from-pink-600/20 to-orange-600/20",
  },
  {
    image: "/images/expansao-crescimento.webp",
    title: "Expansão e Crescimento Inteligente",
    description:
      "Analisamos cada caso individualmente para entender quando — e se — o tráfego pago realmente faz sentido. Quando recomendado, adicionamos a taxa ao orçamento mensal de forma transparente, administrando todo o processo junto a parceiros especializados, para garantir alinhamento total, zero desperdícios e máximo retorno.",
    color: "from-orange-600/20 to-yellow-600/20",
  },
  {
    image: "/images/criacao-de-sites.webp",
    title: "Criação de Sites e Design de Logo",
    description:
      "Para profissionais que precisam de uma presença digital coesa e bem apresentada, oferecemos desenvolvimento de sites one-page sofisticados e identidade visual completa — tudo com estética alinhada ao seu posicionamento e ao universo da sua marca pessoal.",
    color: "from-orange-600/20 to-yellow-600/20",
  },
];

const MotionCard = motion.create(Card);

export function SolutionsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Static background - no animation */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#fefefe] via-[#68d7db] to-[#5a9fe4]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Nossas Soluções
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto text-pretty px-2 sm:px-0"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Serviços abrangentes de comunicação digital sob medida para
            profissionais de alta responsabilidade.
          </motion.p>
        </motion.div>

        {/* Grid com 5º item centralizado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 [&>:last-child:nth-child(odd)]:lg:col-span-2 [&>:last-child:nth-child(odd)]:lg:max-w-md [&>:last-child:nth-child(odd)]:lg:mx-auto">
          {solutions.map((solution, index) => (
            <MotionCard
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer overflow-hidden bg-card/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
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
              {/* Mobile-optimized Image Container */}
              <div className="relative h-48 xs:h-52 sm:h-64 lg:h-72 overflow-hidden">
                {/* Static color overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Image with subtle hover effect */}
                <motion.div
                  className="relative w-full h-full"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </motion.div>

                {/* Mobile-optimized title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <motion.h3
                    className="text-xl xs:text-2xl sm:text-3xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}>
                    {solution.title}
                  </motion.h3>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6 lg:p-8">
                <motion.p
                  className="text-muted-foreground text-pretty leading-relaxed text-sm sm:text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}>
                  {solution.description}
                </motion.p>

                {/* Mobile-optimized accent line */}
                <motion.div
                  className="mt-4 sm:mt-6 h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                />
              </CardContent>
            </MotionCard>
          ))}
        </div>

        {/* Decorative element - hidden on mobile for performance */}
        {!prefersReducedMotion && (
          <motion.div
            className="hidden sm:block absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-accent/8 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </section>
  );
}
