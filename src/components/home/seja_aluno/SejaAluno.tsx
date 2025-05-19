import Button from "@/components/Button";
import Image from "next/image";

const SejaAluno = () => {
  return (
    <section className="flex flex-col items-center w-screen min-h-screen">
      <div className="flex flex-col gap-16 items-center w-full py-16 px-6 max-w-[1440px] text-center">
        <div>
          <h2 className="text-[3.75rem] font-bold">Seja Aluno</h2>
          <p className="text-[1.6875rem]">
            Nossos programas são gratuitos e pensados para apoiar você em cada
            etapa do seu desenvolvimento.
          </p>
        </div>
        <div className="flex items-center">
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image1.png"
            width={600}
            height={600}
          />
          <div className="text-left">
            <h2 className="text-[1.6875rem] font-bold">Inscrições</h2>
            <p className="text-[1.125rem]">
              Acreditamos no poder do conhecimento para mudar vidas. Junte-se a
              nós e comece hoje a trilhar um caminho de novas oportunidades.
            </p>
            <p className="text-[1.125rem]">Inscreva-se agora e dê o primeiro passo.</p>
            <div>
              <Button>INSCREVA-SE</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-right">
            <h2 className="text-[1.6875rem] font-bold">
              Ficou Alguma Dúvida ?
            </h2>
            <p className="text-[1.125rem]">Estamos aqui para ajudar.</p>
            <p className="text-[1.125rem]">
              Sabemos que começar algo novo pode gerar perguntas. Reunimos aqui
              as informações mais importantes para orientar você nessa jornada.
            </p>
            <div>
              <Button>saiba mais</Button>
            </div>
          </div>
          <Image
            alt="dois alunos estudando"
            src="/img/home/seja_aluno/image2.png"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default SejaAluno;
