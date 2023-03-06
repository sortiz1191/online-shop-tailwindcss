import React from 'react'
import { RiHome6Line, RiPercentLine, RiPieChartLine, RiMailLine, RiNotification3Line, RiSettings3Line, RiLogoutCircleLine } from "react-icons/ri";


const Sidebar = (props) => {

  const {showMenu} = props

  return (
    <div className={`bg-[#1F1D2B] z-50 rounded-tr-3xl rounded-br-3xl py-6 fixed lg:left-0 
        top-0 w-28 h-full flex flex-col justify-between transition-all
        ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <ul className='pl-4'>
          <li>
            <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
          </li>

          <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
            <a href="#" className='bg-[#EC7c6a] text-white p-4 flex justify-center rounded-xl'>
              <RiHome6Line className='text-2xl'/>
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="#" className='group-hover:bg-[#EC7c6a] group-hover:text-white p-4 text-[#EC7c6a] flex justify-center rounded-xl'>
              <RiPercentLine className='text-2xl'/>
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="#" className='group-hover:bg-[#EC7c6a] group-hover:text-white p-4 text-[#EC7c6a] flex justify-center rounded-xl'>
              <RiPieChartLine className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="#" className='group-hover:bg-[#EC7c6a] group-hover:text-white p-4 text-[#EC7c6a] flex justify-center rounded-xl'>
              <RiMailLine className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="#" className='group-hover:bg-[#EC7c6a] group-hover:text-white p-4 text-[#EC7c6a] flex justify-center rounded-xl'>
              <RiNotification3Line className='text-2xl'/>
            </a>
          </li>     
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="#" className='group-hover:bg-[#EC7c6a] group-hover:text-white p-4 text-[#EC7c6a] flex justify-center rounded-xl'>
              <RiSettings3Line className='text-2xl'/>
            </a>
          </li>

        </ul>
      </div>
      <div>
        <ul className='pl-4'>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="#" className='group-hover:bg-[#EC7c6a] group-hover:text-white p-4 text-[#EC7c6a] flex justify-center rounded-xl'>
              <RiLogoutCircleLine className='text-2xl'/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar