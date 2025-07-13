import Hero from "@/components/seja_voluntario/hero/Hero";
import PartnerEnterprises from "@/components/seja_voluntario/partner_enterprises/PartnerEnterprises";
import ReasonsToBeVolunteer from "@/components/seja_voluntario/reasons_to_be_volunteer/ReasonsToBeVolunteer";
import SelectionProcess from "@/components/seja_voluntario/selection_process/SelectionProcess";

const SejaVoluntario = () => {
  return (
    <main className="flex flex-col gap-4 items-center overflow-x-hidden">
      <div className="flex flex-col items-center w-screen h-full max-w-[1440px] text-preto1">
        <Hero />
        <ReasonsToBeVolunteer />
        <PartnerEnterprises />
        <SelectionProcess />
      </div>
    </main>
  );
};

export default SejaVoluntario;
