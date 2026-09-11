import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail } from 'lucide-react';

const CTA = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Entre em Contato Conosco",
      description: (
        <div className="space-y-2 mt-2">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            contato@amanzilife.com.br
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            (15) 99652-9535
          </p>
        </div>
      ),
      duration: 6000,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Agende uma visita
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">
            Excelência em gestão hospitalar
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar a gestão do seu hospital com profissionalismo e eficiência
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={handleContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-16 py-8 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            >
              CONTATO
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center text-white"
          >
            <a href="tel:+5515996529535" className="flex items-center gap-2 hover:text-white/70 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-lg">(15) 99652-9535</span>
            </a>
            <span className="hidden md:block text-white/50">|</span>
            <a href="mailto:contato@amanzilife.com.br" className="flex items-center gap-2 hover:text-white/70 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-lg">contato@amanzilife.com.br</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;