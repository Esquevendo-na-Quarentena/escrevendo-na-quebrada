import Button from "../Button";

const ComoFunciona = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h2>Como Funciona</h2>
        <h3>
          O Escrevendo na Quebrada promove aulas de escrita e redação com foco
          em vestibulares através de quatro tarefas:
        </h3>
      </div>
      <div>Cards</div>
      <div>
        <p>
          Vem conhecer o Escrevendo na Quebrada: um projeto gratuito, com
          alimentação nas aulas, tablets e acompanhamento psicológico para te
          apoiar em cada passo!
        </p>
        <div className="flex justify-center">
          <Button>entenda como funciona</Button>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;
