import Button from "../../Button";
import Card from "./Card";
import { cardComoFuncionaData } from "@/data/data";

const ComoFunciona = () => {
  return (
    <section className="flex flex-col items-center w-screen min-h-screen bg-[#EBEBEB]">
      <div className="flex flex-col gap-16 items-center w-full py-16 px-6 max-w-[1440px] text-center">
        <div className="text-center">
          <h2 className="text-[22px] md:text-[28px] font-bold mb-5 md:mb-0">Como Funciona</h2>
          <h3 className="text-[24px] sm:text-[30px] md:text-[40px]">
            O Escrevendo na Quebrada promove aulas de escrita e redação com foco
            em vestibulares através de quatro tarefas:
          </h3>
        </div>
        <div className="flex flex-col  items-center lg:flex-row gap-16 justify-center w-full">
          {cardComoFuncionaData.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === 1 ? "border-l border-gray-200 lg:pl-16" : ""
              } border-r border-gray-200 lg:pr-16`}
            >
              <Card
                alt={item.alt}
                img={item.img}
                text={item.text}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <div>
          <p className="text-[20px] text-center lg:w-[976px]">
            Vem conhecer o Escrevendo na Quebrada: um projeto gratuito, com
            alimentação nas aulas, tablets e acompanhamento psicológico para te
            apoiar em cada passo!
          </p>
          <div className="flex justify-center w-full md:w-[710px] h-[70px] mx-auto mt-16">
            <Button className="text-[18px] sm:text-[24px]">entenda como funciona</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
