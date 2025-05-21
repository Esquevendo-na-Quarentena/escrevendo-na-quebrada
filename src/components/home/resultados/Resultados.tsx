import CardNumber from "./CardNumber";

const Resultados = () => {
  return (
    <section>
      <div className="flex flex-col gap-12 my-[10rem]">
        <div className="flex flex-col gap-12">
          <h2 className="text-[2.5rem] font-bold">Nossos Resultados</h2>
          <p className="text-[1.5rem] w-[46.125rem]">
            Impacto que transforma! Com dezenas de polos ativos, centenas de
            aprovações e prêmios conquistados, nosso cursinho popular de
            redações continua ampliando oportunidades e fortalecendo a educação.
          </p>
        </div>
        <div className="flex w-[81.875rem] mx-auto">
          <CardNumber />
        </div>
      </div>
    </section>
  );
};

export default Resultados;
