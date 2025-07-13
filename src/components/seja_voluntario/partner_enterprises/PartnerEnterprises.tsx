import PartnerPlaceholder from "./partner_placeholder/PartnerPlaceholder";

const partners = [
  {
    id: 1,
    src: "/img/seja_voluntario/parceiros/partner-icon-1.svg",
    alt: "Empresa parceira: Escola Leopoldo Santana",
  },
  {
    id: 2,
    src: "/img/seja_voluntario/parceiros/partner-icon-2.svg",
    alt: "Empresa parceira: Bloco do Beco",
  },
  {
    id: 3,
    src: "/img/seja_voluntario/parceiros/partner-icon-3.svg",
    alt: "Empresa parceira: 3",
  },
  {
    id: 4,
    src: "/img/seja_voluntario/parceiros/partner-icon-4.svg",
    alt: "Empresa parceira: 4",
  },
];

const PartnerEnterprises = () => {
  return (
    <section className="w-screen bg-roxo-escuro/20">
      <div className="w-full mx-auto max-w-5xl px-6 py-30">
        <div className="text-center mx-auto">
          <h2 className="text-3xl font-bold">Empresas Parceiras</h2>
          <p className="mt-4">
            Empresas que acreditam na transformação através da educação fazem
            parte do nosso perfil. No Escrevendo na Quebrada, fortalecer é
            somar! Seja uma empresa parceira e contribua diretamente para a
            construção de futuros mais justos e potentes na quebrada.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {partners.map((partner) => (
            <PartnerPlaceholder
              key={partner.id}
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerEnterprises;
