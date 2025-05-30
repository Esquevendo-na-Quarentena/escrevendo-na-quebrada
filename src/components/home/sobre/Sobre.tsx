import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:flex-row justify-center lg:justify-between items-center w-full min-h-fit py-10 md:py-16 px-6">
      <div className="flex flex-col gap-5 w-full lg:max-w-xl lg:self-start">
        <h1 className="font-bold text-4xl lg:text-6xl">
          Escrevendo novos caminhos através da educação
        </h1>
        <div className="lg:hidden flex mx-auto">
        <Image
          alt=""
          src="/img/home/sobre/imagem-secao-sobre.png"
          width={650}
          height={650}
        />
      </div>
        <div className="text-lg md:max-lg:text-xl lg:text-2xl/7">
          <p>
            O Escrevendo na Quebrada é mais do que um <b>cursinho gratuito</b> —
            é um projeto transformador voltado para jovens que querem mandar bem
            na redação e construir um futuro com mais oportunidades. Aqui, você
            encontra acolhimento real, escuta atenta e acompanhamento
            individualizado, com correções detalhadas que te ajudam a evoluir de
            verdade.
          </p>
          <p className="pt-6">
            <b>Vencedor do prêmio LED em 2025</b>, o EQ faz parte de uma rede
            que acredita no seu potencial e caminha ao seu lado
          </p>
        </div>
        <Link href="/sobre" className="md:max-lg:self-center">
          <Button className="w-full md:max-lg:w-lg lg:w-full text-md md:max-lg:text-lg lg:text-xl shadow-md/80 shadow-preto1 py-3 mt-3">
            Saiba mais sobre o projeto
          </Button>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Image
          alt=""
          src="/img/home/sobre/imagem-secao-sobre.png"
          width={650}
          height={650}
        />
      </div>
    </section>
  );
};

export default Sobre;
