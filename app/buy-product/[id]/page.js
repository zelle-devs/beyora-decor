import CompleteTheSpace from '@/Components/BuyProductPage/CompleteTheSpace/CompleteTheSpace'
import MakeItYoursSection from '@/Components/BuyProductPage/MakeItYoursSection/MakeItYoursSection'
import SeeYourSpace from '@/Components/BuyProductPage/SeeYourSpace/SeeYourSpace'
import TheDetailsMetters from '@/Components/BuyProductPage/TheDetailsMetters/TheDetailsMetters'
import TopSelectionProductArchivePage from '@/Components/BuyProductPage/TopSelectionProductArchivePage/TopSelectionProductArchivePage'
import LessDecorMorePresence from '@/Components/HomePage/LessDecorMorePresence/LessDecorMorePresence'
import React from 'react'

function page() {
  return (
    <div>
      <TopSelectionProductArchivePage/>
      <MakeItYoursSection/>
      <SeeYourSpace/>
      <TheDetailsMetters/>
      <CompleteTheSpace/>
      <LessDecorMorePresence/>
      {/* <BuyProductPage/> */}
      </div>
  )
}

export default page