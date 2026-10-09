import LessDecorMorePresence from '@/Components/HomePage/LessDecorMorePresence/LessDecorMorePresence'
import ProductPageSlider from '@/Components/ShopAllProductSection/ProductPageSlider/ProductPageSlider'
import ProductsCategorySection from '@/Components/ShopAllProductSection/ProductsCategorySection/ProductsCategorySection'
import ShopAllProductSection from '@/Components/ShopAllProductSection/ShopAllProductSection'
import React from 'react'

function page() {
  return (
    <div>
      <ProductPageSlider/>
      {/* <ShopAllProductSection/> */}
      <ProductsCategorySection/>
      <LessDecorMorePresence/>
      </div>
  )
}

export default page