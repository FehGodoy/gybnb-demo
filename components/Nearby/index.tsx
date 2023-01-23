import React from 'react';
import Image from 'next/image'
import brasil from '../../assets/brasil.jpg'
import london from '../../assets/london.jpg'
import espanha from '../../assets/espanha.jpg'
import losAngeles from '../../assets/los-angeles.jpg'
import grecia from '../../assets/grecia.jpg'
import monac from '../../assets/monac.jpg'
import australia from '../../assets/brasil.jpg'
import iceland from '../../assets/iceland.jpg'

const Nearby: React.FC = () => {
  return(
    <>
        <section className="bg-white py-10  mt-14">
            <div className='container max-w-7xl mx-auto max-sm:px-4 py-4'>
                <div className="tituloSection">
                    <h2 className='text-black text-5xl font-semibold'>Explore <span className='text-[#3e00ff]'>best places</span> </h2>
                </div>
                <div className="boxPlaces mt-14 grid max-sm:grid-cols-2 grid-cols-4 gap-4">
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out rounded-md">
                        <div className="photoLocation">
                            <Image 
                                src={brasil}
                                alt="Brasil"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Brasil</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Rio de Janeiro</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={london}
                                alt="London"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Inglaterra</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Londres</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={losAngeles}
                                alt="Los Angeles"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Estados Unidos</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Los Angeles</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={grecia}
                                alt="Grécia"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Grécia</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Atenas</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 mt-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={espanha}
                                alt="Espanha"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Espanha</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Barcelona</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 mt-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={monac}
                                alt="Monaco"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>França</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Mônaco</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 mt-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={australia}
                                alt="Austrália"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Austrália</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Sydney</h6>
                            </div>
                        </div>
                    </div>
                    <div className="boxPlace max-sm:grid md:flex items-center gap-4 mt-4 hover:bg-gray-100 rounded-md cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
                        <div className="photoLocation">
                            <Image 
                                src={iceland}
                                alt="Islândia"
                                className='rounded-xl w-32 h-32 object-cover'
                            />
                        </div>
                        <div className="nameAndCity">
                            <div className="name">
                                <h6 className='text-xl font-extrabold'>Islândia</h6>
                            </div>
                            <div className="city">
                                <h6 className='text-gray-700 font-semibold'>Goðafoss</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Nearby;