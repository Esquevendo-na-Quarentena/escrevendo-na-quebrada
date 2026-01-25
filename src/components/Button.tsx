interface ButtonProps {
  children: string;
  className?: string;
  textColor?: string;
  colorVariant?: keyof typeof colorVariants;
}

const colorVariants = {
  purple: 'bg-roxo-escuro text-white1 hover:bg-roxo',
  lightBlue: 'bg-azul-claro text-white1',
  outlinedLightBlue: 'bg-white1 border border-azul-claro text-azul-claro hover:bg-azul-claro hover:text-white',
  ciano: 'bg-[#10a2c7] text-white1 hover:bg-ciano',
};

const Button = ({
  children,
  colorVariant = "purple",
  className,
}: ButtonProps) => {

  return (
    <button
      className={`${colorVariants[colorVariant]} w-full px-6 rounded-4xl cursor-pointer active:opacity-85 uppercase shadow-sm/60 shadow-preto1 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
