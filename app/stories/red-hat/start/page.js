'use client';

import ButtonStories from '@/components/ButtonStories';
import imgData from '@/public/stories/RedHat/RH_city1.jpg';
import Image from 'next/image';
import { useState } from 'react';
// import Link from "next/link";

export default function RedHatStart() {
  // const [dataArticle, setDataArticle] = useState([
  //   {
  //     id: 1,
  //     nameArticle: 'Глава 3. Федеративное устройство. Статья 65',
  //     linkArticle:
  //       'https://www.consultant.ru/document/cons_doc_LAW_28399/d027bc5c1fa488e9337111c52c7aa947104dc7ad/',
  //   },
  // ]);

  const [dataArticle, setDataArticle] = useState(0);

  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-2">
      <h1 className="text-4xl font-comial my-4">Вступление</h1>
      <div className="red-hat-fon p-3 rounded-lg max-w-md">
        <Image
          src={imgData}
          width={500}
          height={500}
          alt="Тестовая картинка"
          className="my-5 rounded-lg"
          priority
        />
        <p className="text-base font-cloudWorld text-black">
          Город, в котором жила «Красная Шапочка 2.0» (далее по тексту – Шапочка
          / Красная Шапочка),{' '}
          <span className="decoration-solid" onClick={() => setDataArticle(1)}>
            имеет статус города федерального значения. Наравне с другими
            равноправными субъектами он входит в состав Сказочной Федерации.
          </span>
        </p>
        <div className="flex gap-2 justify-center">
          <ButtonStories
            link="/stories/red-hat/chapter-1"
            text="Далее"
            data={dataArticle}
          />
        </div>
      </div>
    </section>
  );
}
