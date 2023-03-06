import React, { useState } from 'react'
import Sidebar from './components/shared/Sidebar'
import { RiMenu3Fill, RiUser3Line, RiPieChartLine, RiAddLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine} from "react-icons/ri";


function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
		  <Sidebar showMenu={showMenu} />
      {/* Mobile menu */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full items-center text-gray-400
        justify-between py-4 px-8 bottom-0 text-3xl flex rounded-tr-xl rounded-tl-xl">
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className='text-white p-2'>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
        <div className='lg:col-span-6'>
          {/* header */}
          <header className='p-4'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              {/* title and search */}
              <div>
                <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
                <p className='text-gray-500'>03 Marzo 2023</p>
              </div>
              {/* search bar */}
              <form >
                <div className='w-full relative'>
                  <RiSearch2Line className='text-gray-300 absolute left-3 top-1/2 -translate-y-1/2'/>
                  <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-8 pr-4 
                    text-gray-300 rounded-lg outline-none' 
                    placeholder='Search...'/>
                </div>
              </form>
            </div>

            {/* tabs */}
            <nav className='text-gray-300 flex items-center justify-between border-b
            md:justify-start md:gap-8'>
              <a href="" className='relative py-2 pr-4 before:w-1/2 text-[#EC7c6a] before:h-[2px] 
              before:absolute before:bg-[#EC7c6a] before:left-0 before:rounded-full
              before:-bottom-[2px]'
              >
                Hot dishes
              </a>
              <a href="" className='py-2 pr-4'>Cold dishes</a>
              <a href="" className='py-2 pr-4'>Soup</a>
              <a href="" className='py-2 pr-4'>Gril</a>
            </nav>
          </header>
          {/* Title content */}
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-xl text-gray-300'>Choose dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1f1d2b] 
            py-2 px-4 rounded-lg'>
              <RiArrowDownSLine />Dine in
            </button>
          </div>
        </div>
        <div className='lg:col-span-2 fixed lg:static right-0'>Carrito</div>
      </main>
    </div>
  )
}

export default App
