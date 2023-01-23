import React from 'react';
import { ArrowDownCircleIcon, MapPinIcon } from '@heroicons/react/24/solid';
import IS from 'country-flag-icons/react/3x2/IS'

const BannerAndText: React.FC = () => {
  return(
    <>
    <div className='container max-w-7xl mx-auto mt-5 p-4 my-auto'>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
            <div className="boxText">
                <div className="titulo">
                    <h1 className="text-black font-semibold text-6xl leading-none max-md:text-5xl">
                        Encontre os <span className='text-[#3e00ff]'>melhores lugares</span> para você e sua família!
                    </h1>
                </div>
                <div className="descricao mt-10 w-3/4">
                    <p className='text-gray-700 text-md'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur provident vero alias quibusdam nobis quaerat et.
                    </p>
                </div>
                <div className="iconeArrow mt-5">
                    <ArrowDownCircleIcon className='w-10 animate-bounce' />
                </div>
            </div>
            <div className="boxPhotoPlace max-sm:h-96">
                <div className="boxImage bg-iceland h-full rounded-lg bg-center bg-cover p-5 flex items-end relative">
                    <div className="countryPlace gap-1 bg-white absolute w-48 py-0 px-2 h-9 flex items-center rounded-full">
                        <div className="flag">
                            <IS title='Iceland' className='w-8 h-8 object-cover rounded-full ' />
                        </div>
                        <div className="countryTitle">
                            <span className='text-gray-700 font-semibold text-sm'>Iceland   </span>
                        </div>
                        <div className="icon">
                        <MapPinIcon className='w-3 h-3' />
                        </div>
                        <span className='text-gray-700 font-semibold text-sm'>Goðafoss</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default BannerAndText;