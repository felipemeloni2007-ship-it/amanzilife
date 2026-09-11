import React from 'react';

const Servicos = () => {
  const pilares = [
    {
      number: '01',
      title: 'Acessibilidade',
      description:
        'Ambientes, materiais e recursos adaptados para garantir a participação de todos os estudantes.',
    },
    {
      number: '02',
      title: 'Respeito às diferenças',
      description:
        'Cada estudante possui características, experiências e formas diferentes de aprender.',
    },
    {
      number: '03',
      title: 'Aprendizagem para todos',
      description:
        'Práticas pedagógicas que valorizam as potencialidades e necessidades de cada aluno.',
    },
    {
      number: '04',
      title: 'Terceirização de profissionais',
      description:
        'Disponibilizamos profissionais qualificados para apoiar instituições em suas demandas educacionais e inclusivas.',
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-background py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block font-semibold uppercase tracking-widest text-primary">
            Nossos serviços
          </span>

          <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Educação inclusiva que acolhe, respeita e transforma
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/70">
            Oferecemos serviços voltados à educação inclusiva e à
            disponibilização de profissionais qualificados, contribuindo para
            ambientes mais acessíveis, acolhedores e preparados para atender às
            necessidades de cada estudante.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pilares.map((pilar) => (
            <article
              key={pilar.number}
              className="group rounded-3xl border border-primary/15 bg-background p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary">
                <span className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-white">
                  {pilar.number}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                {pilar.title}
              </h3>

              <p className="leading-relaxed text-foreground/70">
                {pilar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-primary/10 px-6 py-8 text-center md:mt-16 md:px-10">
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            Soluções personalizadas para cada instituição
          </h3>

          <p className="text-lg leading-relaxed text-foreground/70">
            Atuamos na construção de ambientes inclusivos e na disponibilização
            de profissionais capacitados, oferecendo suporte de acordo com as
            necessidades de cada instituição.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servicos;