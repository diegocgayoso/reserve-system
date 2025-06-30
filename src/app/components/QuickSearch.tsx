// 'use client'
import React from 'react';
import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
        <div className="flex items-center gap-4 text-center mb-4">
            <div className="w-full h-[1px] bg-cinza-claro"></div>
            <h2 className="w-full text-cinza font-medium text-base">Tente pesquisar por</h2>
            <div className="w-full h-[1px] bg-cinza-claro"></div>
        </div>

        <div className="flex w-full justify-around sm:justify-evenly items-center">
          <div className="flex flex-col items-center gap-1">
            <Image width={30} height={30} src="/hotel-icon.png" alt='Hotel icon'/>
            <p className="text-sm text-cinza">Hotel</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image width={30} height={30} src="/cottage-icon.png" alt='Chalé icon'/>
            <p className="text-sm text-cinza">Chalé</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image width={30} height={30} src="/inn-icon.png" alt='Pousada icon'/>
            <p className="text-sm text-cinza">Pousada</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image width={30} height={30} src="/farm-icon.png" alt='Fazenda icon'/>
            <p className="text-sm text-cinza">Fazenda</p>
          </div>
        </div>
    </div>
  );
}

export default QuickSearch;