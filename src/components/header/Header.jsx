import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='bg-white flex items-center gap-6 w-full px-6 py-3'>
            <img src="/header/logo.svg" alt="logo" />
            <img src="/header/search.svg" alt="search" className=' size-4' />
            <img src="/header/cart.svg" alt="cart" className='size-4 strokewidth-3 '/>
            <img src="/header/menubar.svg" alt="menubar" className=' size-4 stroke-9'/>
        </header>
    </div>
  )
}

export default Header