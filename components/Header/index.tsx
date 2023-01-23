import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo-bnb.png'
import {MagnifyingGlassIcon, GlobeAltIcon} from '@heroicons/react/24/solid'


const Header: React.FC = () => {
  return(
    <header className='grid grid-cols-3 bg-transparent p-5 px-10 max-sm:px-5'>
      {/* left */}
    <div className="relative flex items-center h-100 cursor-pointer my-auto">
      <Image 
      src={Logo}
      alt='Godoybnb'
      width={120}
      height={120}
      />
    </div>
      {/* middle - search */}
      <div className='flex items-center md:border-2 justify-between p-2 rounded-full md:shadow-sm'>
        <input type="text" placeholder='Qualquer lugar' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 max-sm:border-2 max-sm:hidden border-gray-400 rounded-3xl py-1 px-4'/>
        <MagnifyingGlassIcon className='h-9 hidden md:inline-flex bg-[#3e00ff] text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* right */}
      <div className='flex space-x-3 items-center justify-end'>
        <GlobeAltIcon className='h-6 text-gray-700' />
        <div className="btnSignUp bg-white shadow-sm py-3 px-8 rounded-full items-center hidden md:inline  ">
          <p className='cursor-pointer text-gray-700 font-medium md:text-sm'>Sign Up</p>
        </div>
        <div className="btnSignIn bg-[#3e00ff] shadow-sm py-3 px-8 rounded-full flex items-center hidden md:inline">
          <p className='cursor-pointer text-white font-medium md:text-sm'>Sign In</p>
        </div>
      </div>
    </header>
  );
}

export default Header;