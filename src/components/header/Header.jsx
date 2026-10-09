import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='bg-yellow-100 flex items-center gap-6 '>
            <img src="/header/logo.svg" alt="logo" />
            <img src="/header/search.svg" alt="search" className=' size-3 ' />
            <img src="/header/cart.svg" alt="cart" className='size-3'/>
            <img src="/header/menubar.svg" alt="menubar" className=' size-3 items-end'/>
        </header>
    </div>
  )
}

export default Header