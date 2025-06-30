import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import CardHero from "@/components/seja_voluntario/hero/CardHero";


const Hero = () => {
    return(
        <section className="w-full min-h-[calc(100vh-97px)] w-screen flex items-center justify-center px-6 md:px-12 py-16 text-white bg-center bg-cover bg-[url(/img/home/seja_voluntario/bg-hero-seja-voluntario.png)]">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-6 md:items-start justify-center gap-20">
                <div className="flex-1">
                    <div className="mb-6">
                        <h1 className="font-bold text-6xl leading-tight tracking-normal text-white">
                        Quer ser voluntário no Escrevendo na Quebrada?
                        </h1>
                    </div>
                    <div className="mb-6">
                        <p className="m-0 font-inter font-normal text-2xl leading-[1.25] tracking-normal text-white">
                        Vem fazer a diferença com a gente! O Escrevendo na Quebrada está com vagas abertas para voluntários. 
                        Se você acredita no poder da educação e quer transformar vidas por meio dos estudos, cola com nós! Bora fortalecer a quebrada juntos.
                        </p>
                    </div>
                    <div className="w-[27.5rem] h-[3.5rem] sm:w-[20rem] md:w-[30rem] lg:w-[36.875rem] text-base sm:text-lg lg:text-[1.5rem]">
                        <Button>FAÇA SUA INSCRIÇÃO AGORA!</Button>
                    </div>
                </div>
                
                <div className="flex-1">
                    <CardHero/>
                </div>
            </div>
        </section>
    );
};

export default Hero;