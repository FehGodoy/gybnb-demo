import React from 'react';
import Image from 'next/image';
import Paisagem from '../../assets/felix.jpg'
import User from '../../assets/user.jpg'

// import { Container } from './styles';

const Feel: React.FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-5 p-4 py-10 my-auto'>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
            <div className="boxImage my-auto">
                <Image 
                    src={Paisagem}
                    alt='Paisagem'
                    className='rounded-2xl w-3/4 mx-auto h-2/3 object-cover object-bottom'
                    />
            </div>
            <div className="max-md:text-center  boxText my-auto">
                <div className="pequenoTitulo my-5">
                    <h6 className='text-base text-[#3e00ff] font-semibold'>
                        Lorem Ipsum
                    </h6>
                </div>
                <div className="titulo">
                    <h1 className="text-black font-semibold text-5xl leading-none max-md:text-lg">
                        Lorem ipsum dolor sit amet consectetur.
                    </h1>
                </div>
                <div className="tempoLeitura mt-3">
                    <span className='text-gray-700'>7 min - Publicado Janeiro 20, 2022</span>
                </div>
                <div className="max-md:w-full descricao mt-5 w-3/4">
                    <p className='text-gray-700 text-md max-md: text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur provident vero alias quibusdam nobis quaerat et.
                    </p>
                </div>
                <div className="review">
                    <div className="flex justify-start mt-4 gap-4 items-center max-md:justify-center">
                        <div className="photoFelix">
                            <Image 
                                src={User}
                                alt='Usuário'
                                className='rounded-full w-14 mx-auto h-14 object-cover object-center'
                                />
                        </div>
                        <div className="userInfo">
                            <div className="name">
                                <h6 className='text-gray-700 font-bold'>Felix Adela</h6>
                            </div>
                            <div className="profile">
                                <h6 className='text-gray-700 font-light'>Influencer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feel;