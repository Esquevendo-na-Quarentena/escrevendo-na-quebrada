import Image from "next/image";

interface CardProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const Card = ({ img, alt, title, text }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center w-[200px]">
      <Image alt={alt} src={img} width={200} height={200} />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-center text-xs w-[200px]">{text}</p>
    </div>
  );
};

export default Card;
