import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, Zap, DollarSign, Award, ClipboardX as ClipboardPlus } from 'lucide-react';

const GestaoComEficiencia = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: 'Terceirização',
      description: 'Profissionais altamente qualificados prontos para atender suas necessidades'
    },
    {
      icon: Zap,
      title: 'Dinamismo',
      description: 'Respostas rápidas e adaptação ágil às demandas do seu hospital'
    },
    {
      icon: DollarSign,
      title: 'Economicidade',
      description: 'Otimização de custos com gestão eficiente de recursos humanos'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Padrão superior de qualidade em todos os serviços prestados'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gestão com Eficiência
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Permitimos que gestores foquem na supervisão estratégica enquanto cuidamos da excelência operacional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClipboardPlus className="w-10 h-10 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Foco no que Realmente Importa
                  </h3>
                  <p className="text-lg text-foreground/70">
                    Com a Amanzi Life, você pode concentrar seus esforços na gestão estratégica e supervisão, 
                    enquanto nossa equipe especializada cuida de toda a operação médica com excelência e profissionalismo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default GestaoComEficiencia;