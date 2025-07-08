import React from 'react'
import Hero from '@/components/seja_voluntario/hero/Hero'
import ReasonsToBeVolunteer from '@/components/seja_voluntario/reasons_to_be_volunteer/ReasonsToBeVolunteer'
import PartnerEnterprises from '@/components/seja_voluntario/partner_enterprises/PartnerEnterprises'

const SejaVoluntario = () => {
  return (
    <main className="flex flex-col gap-4 items-center overflow-x-hidden">
      <div className="flex flex-col items-center w-screen h-full max-w-[1440px] text-preto1">
        <Hero />
        <ReasonsToBeVolunteer />
        <PartnerEnterprises />
      </div>
    </main>
  )
}

export default SejaVoluntario