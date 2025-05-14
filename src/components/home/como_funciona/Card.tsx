import Image from "next/image";

interface CardProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const Card = ({ img, alt, title, text }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center lg:w-[190px]">
      <Image className="lg:w-[190px]" alt={alt} src={img} width={600} height={600} />
      <h2 className="text-[30px] lg:text-lg font-bold">{title}</h2>
      <p className="text-center text-lg lg:text-xs lg:w-[190px]">{text}</p>
    </div>
  );
};

export default Card;
