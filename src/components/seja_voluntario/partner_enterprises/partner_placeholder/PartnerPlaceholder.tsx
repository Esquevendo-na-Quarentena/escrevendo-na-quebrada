import Image from "next/image";

interface PartnerPlaceholderProps {
  src: string;
  alt: string;
}

const PartnerPlaceholder = ({ src, alt }: PartnerPlaceholderProps) => {
  return (
    <div className="rounded-[3rem] bg-roxo-escuro/20 p-12 w-[11.5rem] h-[11.5rem] hover:opacity-75">
      <Image src={src} alt={alt} width={300} height={300} />
    </div>
  );
};

export default PartnerPlaceholder;
