import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      className={cn(
        "relative flex justify-center items-center sm:min-h-screen py-10 sm:py-0 bg-[url('/images/hero.png')] bg-cover bg-center"
      )}>
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay preto - mais escuro no mobile para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/20 md:bg-black/15 z-0" />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título com melhor hierarquia visual no mobile */}
          <h1 className="text-md xs:text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6 text-balance leading-tight">
            Cuidamos da sua Presença Digital para que você cuide do que importa
          </h1>

          {/* Logo centralizado - ajustado para mobile */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-[200px] h-[140px] lg:w-[300px] lg:h-[236px] rounded-lg overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Aura Digital"
                  fill
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 150px"
                  className="object-contain mix-blend-overlay opacity-90 hover:opacity-100 transition-opacity duration-300"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Parágrafo com melhor espaçamento e tamanho no mobile */}
          <p className="text-xs sm:text-3xl lg:text-3xl text-white/95 mb-1 max-w-2xl lg:max-w-3xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
            Sofisticação, Autoridade e Ética são os pilares que tornam a Aura
            referência em setores que exigem excelência.
          </p>

          {/* Botão otimizado para mobile */}
          {/*           <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 rounded-3xl sm:py-3 bg-primary text-white hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] w-full sm:w-auto">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
