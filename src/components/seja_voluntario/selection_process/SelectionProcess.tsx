"use client"

import Carousel from "./Carousel";

const SelectionProcess = () => {
  const CAROUSEL_OPTIONS = { loop: true };
  const slides = [
    {
      carouselTitle: "Corretor de Redações1",
      jobTitle: "Corretor(a) de Redação - Voluntário(a)",
      jobLocation: "Remoto",
      jobDescription:
        "Se você curte escrever, analisar textos e quer ajudar jovens a desenvolverem suas habilidades na escrita, essa vaga é pra você! Como corretor(a) de redação, você irá avaliar textos, oferecer feedbacks construtivos e acompanhar a evolução dos estudantes, sempre com empatia e foco no desenvolvimento individual.",
      jobActivities:
        "Corrigir redações com base nos critérios de competências textuais....",
      buttonCallback: () => {},
    },
    {
      carouselTitle: "Corretor de Redações2",
      jobTitle: "Corretor(a) de Redação - Voluntário(a)",
      jobLocation: "Remoto",
      jobDescription:
        "Se você curte escrever, analisar textos e quer ajudar jovens a desenvolverem suas habilidades na escrita, essa vaga é pra você! Como corretor(a) de redação, você irá avaliar textos, oferecer feedbacks construtivos e acompanhar a evolução dos estudantes, sempre com empatia e foco no desenvolvimento individual.",
      jobActivities:
        "Corrigir redações com base nos critérios de competências textuais....",
      buttonCallback: () => {},
    },
    {
      carouselTitle: "Corretor de Redações3",
      jobTitle: "Corretor(a) de Redação - Voluntário(a)",
      jobLocation: "Remoto",
      jobDescription:
        "Se você curte escrever, analisar textos e quer ajudar jovens a desenvolverem suas habilidades na escrita, essa vaga é pra você! Como corretor(a) de redação, você irá avaliar textos, oferecer feedbacks construtivos e acompanhar a evolução dos estudantes, sempre com empatia e foco no desenvolvimento individual.",
      jobActivities:
        "Corrigir redações com base nos critérios de competências textuais....",
      buttonCallback: () => {},
    },
  ];
  
  return (
    <section className="w-full max-w-7xl px-6 py-30">
      <div>
        <h2 className="font-bold text-3xl">Processos Seletivos</h2>
        <p className="pt-4">
          Fica de olho nos nossos processos seletivos! Buscamos pessoas que
          acreditam na educação como ferramenta de transformação e que queiram
          somar na construção de uma quebrada mais potente. Vem com a gente!
        </p>
      </div>

      <div className="mt-14 mx-auto max-w-3xl">
        <Carousel slides={slides} options={CAROUSEL_OPTIONS} />
      </div>
    </section>
  );
};

export default SelectionProcess;
