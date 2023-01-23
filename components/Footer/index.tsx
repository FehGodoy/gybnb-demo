import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/logo-bnb.png'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import { format } from 'date-fns'; 
const Footer: React.FC = () => {
  const year = format(new Date(), 'yyyy')
  return(
    <div className="footer px-10 py-10 bg-white">
      <div className=' max-md:flex flex-col grid gap-2 grid-cols-2 md:max-w-full mx-auto py-5'>
          <div className="boxFooterLeft">
          <div className="boxLogoFooter ">
              <Image 
              src={Logo}
              alt='Godoybnb'
              width={120}
              height={120}
              />
          </div>
          <div className="boxSocialMedia mt-8">
            <ul>
              <li className='gap-2 flex items-center text-gray-700 font-semibold my-2'>
                <FaFacebook className='text-gray-700' />
                Facebook
              </li>
              <li className='gap-2 flex items-center text-gray-700 font-semibold my-2'>
                <FaTwitter className='text-gray-700' />
                Twitter
              </li>
              <li className='gap-2 flex items-center text-gray-700 font-semibold my-2'>
                <FaInstagram className='text-gray-700' />
                Instagram
              </li>
            </ul>
          </div>
          </div>
          <div className="boxTextFooterAndLinks">
            <div className="textFooter border-b-[#fbfbfb] border-b-2 pb-8">
              <h5 className='text-gray-700 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptatum ducimus excepturi esse optio quis voluptas sint, aliquid adipisci debitis.</h5>
            </div>
            <div className="max-md:hidden gap-3 grid-cols-3 mt-4 grid boxLinks">
              <div className="boxLinks">
                  <div className="titleLink">
                    <h1 className='font-semibold'>Lorem Ipsum</h1>
                  </div>
                  <div className="listingLinks pt-2">
                    <ul className='text-gray-500 font-semibold'>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                    </ul>
                  </div>
                </div>
                <div className="boxLinks">
                  <div className="titleLink">
                    <h1 className='font-semibold'>Lorem Ipsum</h1>
                  </div>
                  <div className="listingLinks pt-2">
                    <ul className='text-gray-500 font-semibold'>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                    </ul>
                  </div>
                </div>
                <div className="boxLinks">
                  <div className="titleLink">
                    <h1 className='font-semibold'>Lorem Ipsum</h1>
                  </div>
                  <div className="listingLinks pt-2">
                    <ul className='text-gray-500 font-semibold'>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                      <li>Dolor Sit</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 md:max-w-full mx-auto pt-5 border-t-[#fbfbfb] border-t-2">
        <div className="boxCopy">
          <h1 className='text-gray-700 font-semibold'>Copyright © {year} Godoydev. Todos os direitos reservados </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;