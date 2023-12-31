import testFoto from "@/public/stories/RedHat/testNew.png";
import Image from "next/image";
import ButtonStories from "@/components/ButtonStories";

export const metadata = {
  title: "Красная Шапочка",
  description: "Истории Нашего Общества",
};

export default function RedHat() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-start p-2'>
      <h1 className='text-4xl font-comial my-4'>Красная шапочка</h1>
      <div className='red-hat-fon p-3 rounded-lg'>
        <p className='text-base text-center font-cloudWorld text-black'>
          История о соверменной девочке с головным убором красного цвета
        </p>
        <Image
          src={testFoto}
          width={500}
          height={500}
          alt='Тестовая картинка'
          className='my-5'
          priority
        />
        <div className='flex gap-2 justify-center'>
          <ButtonStories link='/' text='Главная' />
          <ButtonStories link='/stories/red-hat/start' text='Начать' />
        </div>
      </div>
    </section>
  );
}
