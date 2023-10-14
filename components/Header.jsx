"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function visibleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className='absolute top-0 py-2 sm:py-4 my-1 border_section z-50 self-start bg-[#1e191a]'>
      <button onClick={() => visibleMenu()}>Меню</button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed flex flex-col top-0 h-full w-full bg-black/[.9] text-white items-center justify-start`}
      >
        <Link
          href='/'
          onClick={() => visibleMenu()}
          className='text-xl border p-2 my-2 text-center w-1/2'
        >
          Главная
        </Link>
        <p className='text-xl border p-2 my-2 text-center w-1/2'>Сказки</p>
        <p className='text-xl border p-2 my-2 text-center w-1/2'>Законы</p>
        <button
          type='button'
          onClick={() => visibleMenu()}
          className='text-xl border p-2 my-2 w-1/2'
        >
          Закрыть меню
        </button>
        <button
          type='button'
          onClick={function () {
            router.back();
            visibleMenu();
          }}
          className='text-xl border p-2 my-2 w-1/2'
        >
          Назад
        </button>
      </div>
    </header>
  );
}
