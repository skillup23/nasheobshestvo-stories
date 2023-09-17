'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FotoText({ foto, children }) {
  const [isFlip, setFlip] = useState(false);

  function getFlip() {
    setFlip(!isFlip);
  }

  return (
    <div className="">
      <Image
        src={foto}
        width={500}
        height={500}
        alt="Тестовая картинка"
        className={`${isFlip ? 'hidden' : ' block'} my-3 cursor-pointer`}
        priority
        onClick={() => getFlip()}
      />
      <div
        className={`${isFlip ? 'block' : 'hidden'} my-3 cursor-pointer`}
        onClick={() => getFlip()}
      >
        {children}
      </div>
    </div>
  );
}
