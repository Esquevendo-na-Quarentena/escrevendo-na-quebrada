import Button from "@/components/Button";
import StackedCards from "./StackedCards";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-97px)] w-screen flex items-center justify-center px-6 md:px-12 py-16 text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-6 pt-[6rem] justify-center gap-20">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="font-bold text-3xl leading-tight tracking-normal text-preto1">
              Escrevendo {' '}
              <br /><span className="text-azul-claro">na Quebrada</span>
            </h1>
          </div>
          <div className="mb-6">
            <p className="m-0 font-light text-xl leading-6 tracking-normal text-preto1">
              Um programa de formação em escrita criativa que valoriza as vozes da periferia. 
              Transforme suas histórias em literatura e faça parte de uma comunidade de escritores.
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="py-2 max-w-sm uppercase">
              Inscreva-se
            </Button>
            <Button className="py-2 max-w-sm uppercase border-1" colorVariant="outlinedLightBlue">
              Saiba mais
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <StackedCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
