import Button from "../../Button";
import Card from "./Card";

const ComoFunciona = () => {
  const cardData = [
    {
      id: 1,
      img: "/img/home/como_funciona/image1.png",
      alt: "Gorato no computador",
      title: "Cadastro",
      text: "Verifique as regras e informações nos editais e inscreva-se!",
    },
    {
      id: 2,
      img: "/img/home/como_funciona/image2.png",
      alt: "Equipe unida",
      title: "Acolhimento",
      text: "Participe da recepção e conheça mais sobre o EQ e sua equipe!",
    },
    {
      id: 3,
      img: "/img/home/como_funciona/image3.png",
      alt: "Garoto escrevendo",
      title: "Formação",
      text: "Tenha aulas semanais de redação e escrita regularmente!",
    },
    {
      id: 4,
      img: "/img/home/como_funciona/image4.png",
      alt: "Dois alunos se ajudando",
      title: "Preparação Final",
      text: "Tenha acompanhamento durante e após o período de vestibulares!",
    },
  ];
  return (
    <section className="flex flex-col items-center my-10">
      <div className="text-center">
        <h2 className="text-[28px] font-bold my-5">Como Funciona</h2>
        <h3 className="text-[40px]">
          O Escrevendo na Quebrada promove aulas de escrita e redação com foco
          em vestibulares através de quatro tarefas:
        </h3>
      </div>
      <div className="flex gap-16 justify-center w-full my-10">
        {cardData.map((item) => (
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
