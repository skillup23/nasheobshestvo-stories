import ButtonStories from "@/components/ButtonStories";
import imgData from "@/public/stories/RedHat/RH_city.JPG";
import Image from "next/image";
// import Link from "next/link";

export default function RedHatStart() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-start p-2'>
      <h1 className='text-4xl font-comial my-4'>Вступление</h1>
      <div className='red-hat-fon p-3 rounded-lg max-w-md'>
        <Image
          src={imgData}
          width={500}
          height={500}
          alt='Тестовая картинка'
          className='my-5 rounded-lg'
          priority
        />
        <p className='text-base font-cloudWorld text-black'>
          Город, в котором жила «Красная Шапочка 2.0» (далее по тексту – Шапочка
          / Красная Шапочка), имеет статус города федерального значения. Наравне
          с другими равноправными субъектами он входит в состав Сказочной
          Федерации (1).
        </p>
        <div className='flex gap-2 justify-center'>
          <ButtonStories link='/stories/red-hat/chapter-1' text='Далее' />
        </div>
      </div>
    </section>
  );
}
