import ButtonStories from '@/components/ButtonStories';
import imgData from '@/public/stories/RedHat/RH_city1.jpg';
import Image from 'next/image';
// import Link from "next/link";

export default function RedHatStart() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-comial my-4">Вступление</h1>
      <div className="red-hat-fon p-3 rounded-lg max-w-md">
        <p className="text-normal text-center">
          В некотором царстве, в некотором государстве…
        </p>
        <Image
          src={imgData}
          width={500}
          height={500}
          alt="Город Сказочной Федерации"
          className="my-5 rounded-lg"
          priority
        />
        <p className="text-normal">
          Город, в котором жила «Красная Шапочка 2.0» (далее по тексту – Шапочка
          / Красная Шапочка), имеет статус города федерального значения. Наравне
          с другими равноправными субъектами он входит в состав Сказочной
          Федерации 🥧.
        </p>
        <div className="flex gap-2 justify-center">
          <ButtonStories link="/stories/red-hat/chapter-1" text="Далее" />
        </div>
      </div>
    </div>
  );
}
