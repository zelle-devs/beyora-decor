import TopSectionCartPage from '@/Components/CartPageMain/TopSectionCartPage/TopSectionCartPage'
import YouMayAlsoLikeCartMain from '@/Components/CartPageMain/YouMayAlsoLikeCartMain/YouMayAlsoLikeCartMain'
import LessDecorMorePresence from '@/Components/HomePage/LessDecorMorePresence/LessDecorMorePresence'
import React from 'react'

function page() {
  return (
    <div>
        <TopSectionCartPage/>
        <YouMayAlsoLikeCartMain/>
        <LessDecorMorePresence/>
    </div>
  )
}

export default page