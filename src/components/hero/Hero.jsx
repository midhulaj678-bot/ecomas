import React from 'react'



const Hero = () => {
  return (
    <div className='bg-[#FFF8F0] px-3'>
        <div className='bg-amber-50'>
            <h1 className='font-tangerine text-5x3 text-[#c17b45] bg-[#FFF8F0]'>The original</h1>
            </div>
            <div className='pt-2'>
            <p className='text-black font-mulish bg-[#FFF8F0] '> Happiness Comes in the <br />Box of jewellery</p>

        </div>
        <div className='pt-12'> 
          <button className='border-black text-white bg-black px-5 py-3 pt-3 pb-4 hover:bg-[#c17b45]'>Shop Now</button>
        </div>
      <div className='pt-13'>
        <img src="/hero/heroimg.jpg" alt="hero" />
      </div>
      <div className='pt-26 flex '>
        <img src="/hero/car.svg" alt="" className='py-2 px-'/>
        <h1 className='flex justify-between px-8 py-9'><br />Free Delivery <br/>
       Order From all item</h1>   
      </div>
      <div className='flex gap-9'>
        <img src="/hero/money.svg" alt="money" />
        <h1 >Return & Refund <br className='font-bold'/>
        Money back guarantee</h1>
      </div>
      <div className='flex pt-9 gap-9'>
        <img src="/hero/discount.svg" alt="disc" />
        <h1>Member Discount <br /> Onevery order over  $140.00</h1>
      </div>
      <div className='flex pt-9 gap-9'>
        <img src="/hero/hedset.svg" alt="hed" />
        <h1>Support 24/7 <br />Contact us 24 hours a day </h1>
      </div>
    </div>
  )
}

export default Hero