import { FaUserFriends, FaGraduationCap, FaBuilding, FaArrowRight } from 'react-icons/fa';

const CardHero = () => {
  const dados = [
    { icone: <FaUserFriends />, texto: '+100 VOLUNTÁRIOS TRABALHANDO ATUALMENTE' },
    { icone: <FaGraduationCap />, texto: '+10 EX ALUNOS TRABALHANDO AQUI' },
    { icone: <FaBuilding />, texto: '+2 EMPRESAS PARCEIRAS' },
    { icone: <span className="text-xl font-bold">3</span>, texto: 'PROCESSOS SELETIVOS EM ABERTO' },
  ];

  return (
    <div className="bg-[rgba(89,28,89,0.65)] rounded-[2rem] p-8 text-white max-w-xl w-full backdrop-blur-md shadow-lg">
      <h2 className="pb-4 text-lg mb-6 font-semibold">UM POUCO MAIS SOBRE A NOSSA EQUIPE!</h2>
      
      <div className="flex flex-col gap-9 py-4">
        {dados.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 rounded-full px-10 py-4 flex items-center justify-between hover:bg-white/20 transition"
          >
            <div className="flex items-center gap-5">
              <div className="text-2xl">{item.icone}</div>
              <span className="text-sm font-medium">{item.texto}</span>
            </div>
            <FaArrowRight className="text-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHero;
