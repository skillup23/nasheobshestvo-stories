import Image from 'next/image';
import imgBasket from '@/public/stories/RedHat/RH_basket.png';

export const metadata = {
  title: 'Красная шапочка',
  description: 'Истории Нашего Общества',
};

export default function RedHatLayout({ children }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-2">
      {children}
      <div className="-mt-12 z-50 hidden">
        <Image
          src={imgBasket}
          width={50}
          height={50}
          alt="Красная шапочка в окне дома"
          className=""
          priority
        />
      </div>
    </section>
  );
}
