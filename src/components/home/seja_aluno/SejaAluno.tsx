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
          <div>
            <h2 className="">Inscrições</h2>
            <p>
              Acreditamos no poder do conhecimento para mudar vidas. Junte-se a
              nós e comece hoje a trilhar um caminho de novas oportunidades.
              Inscreva-se agora e dê o primeiro passo.
            </p>
            <div>
              <Button>INSCREVA-SE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SejaAluno;
