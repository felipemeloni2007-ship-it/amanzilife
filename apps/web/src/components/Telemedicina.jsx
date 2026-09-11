import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const Telemedicina = () => {
  return (
    <section id="telemedicina" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Telemedicina
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  O Futuro da Medicina
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  Não somente em tempos de pandemia, a telemedicina chegou para ficar, e na Amanzi Life você conta com esse serviço nas mais diversas áreas.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Oferecemos consultas remotas com profissionais especializados, garantindo atendimento de qualidade com a comodidade e segurança que você precisa, onde quer que esteja.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-3xl text-primary mb-2">24/7</p>
                <p className="text-sm text-foreground/70">Disponibilidade</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-3xl text-primary mb-2">100%</p>
                <p className="text-sm text-foreground/70">Seguro</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1585092284034-48c72302862c" 
                alt="Telemedicine consultation on tablet device showing doctor-patient video call"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Telemedicina;