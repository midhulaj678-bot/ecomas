import React from 'react'

const Title = () => {
  return (
    <div>
        <div className='bg-[#4B2E1F] text-white  font-sans '>
            <img src="/title/festivel.jpg" alt="festivel" className=''/>
            <h1 className='text-yellow-800 px-8 pt-8 text-2x1'>Festive Sale Offers <br />
            </h1>
            <h1 className='px-8 font-bold text-3xl pt-2'>Handmade <br/>Jewellery For <br /> Special <br />Occasions</h1>
            <p className='px-8 pt-4 pb-6'>Aliqute eget  sit  amet tellus cras <br />adipcing enim, Non quam <br /> locus suspetias facibus <br />interdum prosuture.Loberrids Mattis <br />aliquam fausibus puras in massa <br />tempor nec.</p>
            
<div className="relative flex items-center px-9">
  {/* Discount badge */}
  <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-[#393939] text-white ">
    <span className="text-2xl font-medium">17%</span>
    <span className="text-2xl font-medium">Offer</span>
  </div>

  {/* Horizontal line */}
  <div className="ml-4 h-px w-8 bg-[#B9824B]"></div>
   
</div>
 <div className='px-9'>
            <h1 className='font-bold pt-5 text-2xl pb-2'>Double Row Earrings <br /></h1>
            <h6 className='pb-6'>Antique Luxury</h6>
        </div>
        <div className='   text-black bg-white hover:to-black border w-40 py-6 flex relative justify-center pl-3 px-1 pt-1   '>
            <button className='px-6 h-2 items-center justify-center '>Shop Now &rarr;</button>

        </div>
              
        </div>
       
    </div>
    
  )
}

export default Title