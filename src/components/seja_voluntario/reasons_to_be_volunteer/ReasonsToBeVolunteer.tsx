import Image from "next/image";

const reasons = [
  {
    image: "/img/seja_voluntario/motivos/pessoa1.png",
    title: "Certificados",
    description:
      "Ao decorrer do voluntariado, você recebe diferentes tipos de certificado que podem ajudar na sua formação profissional.",
  },
  {
    image: "/img/seja_voluntario/motivos/pessoa2.png",
    title: "Horas Complementares",
    description:
      "Seu tempo aqui também conta! Valide suas horas complementares de forma significativa, ajudando a transformar vidas.",
  },
  {
    image: "/img/seja_voluntario/motivos/pessoa3.png",
    title: "Fortalecimento da Educação",
    description:
      "Ser voluntário é acreditar na potência da educação como ferramenta de mudança. Faça parte dessa transformação!",
  },
];

const ReasonsToBeVolunteer = () => {
  return (
    <section className="w-full max-w-7xl px-6 py-30">
      <div>
        <h2 className="font-bold text-3xl">
          Motivos para ser voluntário do EQ
        </h2>
        <p className="pt-4">
          Ser voluntário no Escrevendo na Quebrada é acreditar que a educação
          muda realidades. Aqui, você compartilha conhecimento, fortalece a
          comunidade, desenvolve habilidades e faz parte de uma rede que sonha e
          constrói um futuro melhor pra quebrada.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly mt-10 gap-6">
        {reasons.map((reason) => (
          <div key={reason.title} className="max-w-xs">
            <Image alt="" src={reason.image} width={300} height={300} />
            <h3 className="text-lg font-bold mt-3">{reason.title}</h3>
            <p className="text-sm max-w-[90%] mt-1">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToBeVolunteer;
