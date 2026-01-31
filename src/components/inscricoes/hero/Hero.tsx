import Button from "@/components/Button";
import StackedCards from "./StackedCards";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiBookOpenBold } from "react-icons/pi";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-97px)] w-screen flex items-center justify-center px-6 md:px-12 py-16 text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-6 justify-center gap-20">
        <div className="flex-1">
          <div className="mb-6">
            <Badge applicationSeason="open">Inscrições abertas</Badge>
            <h1 className="font-bold text-6xl leading-tight tracking-normal text-preto1 mt-4">
              Escrevendo {' '}
              <br /><span className="text-ciano">na Quebrada</span>
            </h1>
          </div>
          <div className="mb-12">
            <p className="m-0 font-normal text-xl leading-6 tracking-normal text-preto1">
              Um programa de formação em escrita criativa que valoriza as vozes da periferia.
              Transforme suas histórias em literatura e faça parte de uma comunidade de escritores.
            </p>
          </div>
          <div className="flex gap-4">
            <Button colorVariant="ciano" className="py-2 max-w-sm uppercase">
              Inscreva-se
            </Button>
            <Button colorVariant="outlinedLightBlue" className="py-2 max-w-sm uppercase border-1">
              Saiba mais
            </Button>
          </div>
          <div className="flex justify-start items-center gap-12 text-preto1 text-xl mt-12">
            <p className="font-normal"><FaPeopleGroup className="inline text-2xl text-ciano mr-1" /> +500 alunos formados</p>
            <p className="font-normal"><PiBookOpenBold className="inline text-2xl text-ciano mr-1" /> +100 alunos aprovados</p>
          </div>
        </div>

        <div className="flex-1 h-100 w-100">
          <StackedCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
