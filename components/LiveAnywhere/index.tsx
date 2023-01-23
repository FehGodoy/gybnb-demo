import React from 'react';
import japan from '../../assets/fujinomiya-japan.jpg'
import australia from '../../assets/bondi-beach-australia.jpg'
import indonesia from '../../assets/west-papua-indonesia.jpg'
import california from '../../assets/california-dunas.jpg'
import Image from 'next/image';


const LiveAnywhere: React.FC = () => {
  return(
    <>
    <section className="anyhwere bg-white py-9">
        <div className="container max-w-7xl mx-auto max-sm:px-4 py-4">
            <div className="boxTitle text-center">
                <div className="miniTitle py-3">
                    <h6 className='uppercase text-[#3e00ff] font-bold'>Trending</h6>
                </div>
                <div className="titleSection py-3">
                    <h2 className='text-4xl text-black font-bold'>Best in travel 2023</h2>
                </div>
                <div className="descriptionSection py-3 max-w-xl mx-auto">
                    <h6 className='text-gray-700 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo, non corrupti in placeat dolorem! Debitis quidem quaerat eum molestias eos consectetur quos hic nulla eius.</h6>
                </div>
            </div>
            <div className="boxCardsPlaces max-sm:block grid gap-4 grid-cols-4 mt-12">
                <div className="boxCard">
                    <div className="photoPlacecard h-96 cursor-pointer">
                        <Image 
                        src={japan}
                        alt='Japão'
                        className='rounded-xl object-cover h-full'
                        />
                    </div>
                    <div className="placeAndCountry text-center py-4">
                        <div className="placeName">
                            <h4 className='text-black font-bold'>Fujinomiya</h4>
                        </div>
                        <div className="country">
                            <h6 className='text-gray-700 font-normal'>Japan</h6>
                        </div>
                    </div>
                </div>
                <div className="boxCard">
                    <div className="photoPlacecard h-96 cursor-pointer">
                        <Image 
                        src={australia}
                        alt='Austrália'
                        className='rounded-xl object-cover h-full'
                        />
                    </div>
                    <div className="placeAndCountry text-center py-4">
                        <div className="placeName">
                            <h4 className='text-black font-bold'>Bondi Beach</h4>
                        </div>
                        <div className="country">
                            <h6 className='text-gray-700 font-normal'>Austrália</h6>
                        </div>
                    </div>
                </div>
                <div className="boxCard">
                    <div className="photoPlacecard h-96 cursor-pointer">
                        <Image 
                        src={indonesia}
                        alt='Indonésia'
                        className='rounded-xl object-cover h-full'
                        />
                    </div>
                    <div className="placeAndCountry text-center py-4">
                        <div className="placeName">
                            <h4 className='text-black font-bold'>West Papua</h4>
                        </div>
                        <div className="country">
                            <h6 className='text-gray-700 font-normal'>Indonésia</h6>
                        </div>
                    </div>
                </div>
                <div className="boxCard">
                    <div className="photoPlacecard h-96 cursor-pointer">
                        <Image 
                        src={california}
                        alt='California'
                        className='rounded-xl object-cover h-full'
                        />
                    </div>
                    <div className="placeAndCountry text-center py-4">
                        <div className="placeName">
                            <h4 className='text-black font-bold'>Califórnia Dunas</h4>
                        </div>
                        <div className="country">
                            <h6 className='text-gray-700 font-normal'>Estados Unidos</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default LiveAnywhere;