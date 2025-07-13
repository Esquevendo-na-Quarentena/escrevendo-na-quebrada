import Button from "@/components/Button";
import Image from "next/image";

const SectionsAndVolunteers = () => {
  return (
    <section className="w-screen border-t border-preto1/30">
      <div className="w-full flex flex-col gap-4 mx-auto max-w-5xl px-6 py-30">
        <h2 className="font-bold text-3xl">Setores e Voluntários</h2>
        <Image
          alt=""
          src={
            "/img/seja_voluntario/setores_e_voluntarios/image-sections-and-volunteers.png"
          }
          width={1440}
          height={400}
          objectFit="contain"
          className="mt-4"
        />
        <p>
          Gostou de algum dos nosso trabalhos e quer saber mais sobre nossos
          voluntários, entrar em contato ou só ver um pouco mais sobre? Confira
          logo a baixo uma pequena fração das pessoas que fazem nosso projeto
          funcionar!
        </p>
        <Button className="w-full sm:max-w-xs py-4 px-0 text-sm">CONHEÇA NOSSOS VOLUNTÁRIOS</Button>
      </div>
    </section>
  );
};

export default SectionsAndVolunteers;
