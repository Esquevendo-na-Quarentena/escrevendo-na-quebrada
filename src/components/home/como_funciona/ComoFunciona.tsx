import Button from "../../Button";
import Card from "./Card";
import { cardComoFuncionaData } from "@/data/data";

const ComoFunciona = () => {
  
  return (
    <section className="flex flex-col items-center my-10 h-screen">
      <div className="text-center">
        <h2 className="text-[28px] font-bold my-5">Como Funciona</h2>
        <h3 className="text-[40px]">
          O Escrevendo na Quebrada promove aulas de escrita e redação com foco
          em vestibulares através de quatro tarefas:
        </h3>
      </div>
      <div className="flex gap-16 justify-center w-full my-10">
        {cardComoFuncionaData.map((item) => (
          <div
            key={item.id}
            className={`${
              item.id === 1 ? "border-l border-gray-200 pl-16" : ""
            } border-r border-gray-200 pr-16`}
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
        <p className="text-[20px] text-center w-[976px]">
          Vem conhecer o Escrevendo na Quebrada: um projeto gratuito, com
          alimentação nas aulas, tablets e acompanhamento psicológico para te
          apoiar em cada passo!
        </p>
        <div className="flex justify-center w-[710px] h-[70px] mx-auto mt-16">
          <Button className="text-[24px]">entenda como funciona</Button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
