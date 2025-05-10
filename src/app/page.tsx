import ComoFunciona from "@/components/como_funciona/ComoFunciona";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-screen bg-midnight text-white items-center">
      <div className="w-full max-w-[1440px] text-black">
        <ComoFunciona/>
      </div>
    </div>
  );
}
