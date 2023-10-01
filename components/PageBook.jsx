"use client";

import { useState } from "react";

export default function PageBook({ pageOne, pageTwo }) {
  const [isChoise, setChoise] = useState(false);

  return (
    <div>
      <div className='relative flex justify-between w-full font-comial text-xl -mb-[1px] z-10'>
        <button
          onClick={() => setChoise(false)}
          className='bg-white text-black px-3 pt-1 pb-3 rounded-t-lg'
        >
          Вариант 1
        </button>
        <button
          onClick={() => setChoise(true)}
          className='bg-zinc-500 px-3 pt-1 pb-3 rounded-t-lg'
        >
          Вариант 2
        </button>
      </div>

      <div
        className={`${
          isChoise ? "hidden" : " block"
        } bg-white p-3 rounded-b-lg relative z-20`}
      >
        {pageOne}
      </div>

      <div
        className={`${
          isChoise ? "block" : " hidden"
        } bg-zinc-500 p-3 rounded-b-lg relative z-20`}
      >
        {pageTwo}
      </div>
    </div>
  );
}
