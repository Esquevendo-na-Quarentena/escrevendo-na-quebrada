import { CgArrowRightO } from "react-icons/cg";
import { IoDocumentOutline, IoSchoolOutline } from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

const CardHero = () => {
  const dados = [
    { icone: <RxPerson />, texto: "+80 VOLUNTÁRIOS TRABALHANDO ATUALMENTE" },
    { icone: <IoSchoolOutline />, texto: "+10 EX ALUNOS TRABALHANDO AQUI" },
    { icone: <PiBuildingOffice />, texto: "+2 EMPRESAS PARCEIRAS" },
    { icone: <IoDocumentOutline />, texto: "3 PROCESSOS SELETIVOS EM ABERTO" },
  ];

  return (
    <div className="bg-roxo-escuro/70 rounded-[3rem] px-8 py-12 text-white1 max-w-xl w-full shadow-lg">
      <h2 className="pb-4 text-md font-normal text-center">
        UM POUCO MAIS SOBRE A NOSSA EQUIPE!
      </h2>

      <div className="flex flex-col gap-9 py-4">
        {dados.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FFA0F9]/20 rounded-full px-6 py-4 flex items-center justify-between hover:opacity-70 transition cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div className="text-2xl">{item.icone}</div>
              <span className="text-sm font-medium">{item.texto}</span>
            </div>
            <CgArrowRightO className="text-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHero;
