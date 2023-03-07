import React, { useState } from 'react'
import Sidebar from './components/shared/Sidebar'
import { RiMenu3Fill, RiUser3Line, RiPieChartLine, RiAddLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine} from "react-icons/ri";
import dish from './assets/dish.png'

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
      <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
        <div className='lg:col-span-6 md:p-8'>
          {/* header */}
          <header>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              {/* title and search */}
              <div>
                <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
                <p className='text-gray-500'>March 03, 2023</p>
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
            md:justify-start md:gap-8 mb-8'>
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
          <div className='flex items-center justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Choose dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1f1d2b] 
            py-2 px-4 rounded-lg'>
              <RiArrowDownSLine />Dine in
            </button>
          </div>
          {/* Content */}
          <div className='p-8 grid grid-cols-1 md:grid-cols-2 gap-16 2xl:grid-cols-3'>
            {/* card */}
            <div className='bg-[#1f1d2b] p-8 px-20 gap-2 rounded-xl flex flex-col items-center text-center text-gray-300'>
              <img src={dish} alt="Dish" className='w-32 h-32 object-cover -mt-20 shadow-xl rounded-full'/>
              <p className='text-xl'>Speacy seassoned seafod noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            <div className='bg-[#1f1d2b] p-8 px-20 gap-2 rounded-xl flex flex-col items-center text-center text-gray-300'>
              <img src={dish} alt="Dish" className='w-32 h-32 object-cover -mt-20 shadow-xl rounded-full'/>
              <p className='text-xl'>Speacy seassoned seafod noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            <div className='bg-[#1f1d2b] p-8 px-20 gap-2 rounded-xl flex flex-col items-center text-center text-gray-300'>
              <img src={dish} alt="Dish" className='w-32 h-32 object-cover -mt-20 shadow-xl rounded-full'/>
              <p className='text-xl'>Speacy seassoned seafod noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            <div className='bg-[#1f1d2b] p-8 px-20 gap-2 rounded-xl flex flex-col items-center text-center text-gray-300'>
              <img src={dish} alt="Dish" className='w-32 h-32 object-cover -mt-20 shadow-xl rounded-full'/>
              <p className='text-xl'>Speacy seassoned seafod noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            <div className='bg-[#1f1d2b] p-8 px-20 gap-2 rounded-xl flex flex-col items-center text-center text-gray-300'>
              <img src={dish} alt="Dish" className='w-32 h-32 object-cover -mt-20 shadow-xl rounded-full'/>
              <p className='text-xl'>Speacy seassoned seafod noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            <div className='bg-[#1f1d2b] p-8 px-20 gap-2 rounded-xl flex flex-col items-center text-center text-gray-300'>
              <img src={dish} alt="Dish" className='w-32 h-32 object-cover -mt-20 shadow-xl rounded-full'/>
              <p className='text-xl'>Speacy seassoned seafod noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
          </div>
        </div>
        <div className='w-full h-full lg:col-span-2 lg:static right-0 top-0 bg-[#1f1d2b]'>
          <div className='relative'>
            <RiCloseLine className='absolute left-4 top-4 p-4 box-content text-gray-300 bg-[#262837] rounded-full'/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
