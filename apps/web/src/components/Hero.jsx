import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
const Hero = () => {
  const {
    toast
  } = useToast();
  const handleContact = () => {
    toast({
      title: "Entre em Contato",
      description: "Email: contato@amanzilife.com.br | Tel: (15) 99652-9535",
      duration: 5000
    });
  };
  return <section id="home" className="relative flex flex-col min-h-[calc(100vh-120px)] bg-white">
      {/* Background Image with Overlay */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://horizons-cdn.hostinger.com/0ea0605c-d0d7-4515-bd89-8512f054966e/captura-de-tela-2026-03-03-161520-FzzT2.png" alt="Professional healthcare team collaborating in modern medical facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex flex-col items-center">
            <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-5xl leading-tight drop-shadow-lg" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              TRABALHAMOS COM EXCELÊNCIA EM TODAS ESPECIALIDADES
            </motion.h1>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              <Button onClick={handleContact} size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                CONTATO
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;