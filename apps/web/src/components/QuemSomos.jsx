import React from 'react';
import { motion } from 'framer-motion';

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem Somos
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
            <div className="relative">
              <div className="absolute -left-4 top-0 w-2 h-full bg-primary rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Excelência desde 2019
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  Fundada em 2019, a <span className="font-semibold text-primary">Amanzi Life</span> é uma empresa especializada em serviços médicos de emergência e gestão hospitalar de excelência.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  Nossa missão é fornecer soluções completas em terceirização de médicos, terapeutas e profissionais de saúde altamente qualificados, permitindo que gestores hospitalares foquem na supervisão estratégica enquanto cuidamos da excelência operacional.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Com uma equipe multidisciplinar de profissionais experientes, oferecemos atendimento personalizado e de alta qualidade em todas as especialidades médicas, sempre priorizando o bem-estar dos pacientes e a eficiência da gestão hospitalar.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pl-8">
              <div className="flex-1 bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-2xl text-primary mb-1">2019</p>
                <p className="text-sm text-foreground/70">Fundação</p>
              </div>
              <div className="flex-1 bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-2xl text-primary mb-1">100+</p>
                <p className="text-sm text-foreground/70">Profissionais</p>
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
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1666886573301-b5d526cfd518" 
                alt="Healthcare professionals providing quality medical services in modern hospital setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;