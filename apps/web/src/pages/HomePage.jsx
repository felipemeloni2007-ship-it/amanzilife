import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import QuemSomos from '@/components/QuemSomos.jsx';
import GestaoComEficiencia from '@/components/GestaoComEficiencia.jsx';
import Especialidades from '@/components/Especialidades.jsx';
import Telemedicina from '@/components/Telemedicina.jsx';
import CTA from '@/components/CTA.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Amanzi Life - Excelência em Gestão Hospitalar</title>
        <meta 
          name="description" 
          content="Amanzi Life oferece serviços de excelência em gestão hospitalar, telemedicina e terceirização de profissionais de saúde. Atendimento em Sorocaba e Nova Odessa - SP." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <QuemSomos />
          <GestaoComEficiencia />
          <Especialidades />
          <Telemedicina />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;