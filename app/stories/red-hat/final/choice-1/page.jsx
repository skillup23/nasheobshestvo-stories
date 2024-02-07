import ButtonStories from '@/components/ButtonStories';
import imgData from '@/public/stories/RedHat/RH_start1.jpg';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import { accordionDataFinal_1 } from '@/public/final/accordeon';

export default function RedHatStart() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-2">
      <h1 className="text-4xl font-comial my-4">Финал 1 пути</h1>
      <div className="red-hat-fon p-3 rounded-lg max-w-md">
        <Image
          src={imgData}
          width={500}
          height={500}
          alt="Город Сказочной Федерации"
          className="my-5 rounded-lg"
          priority
        />
        <h3 className="text-xl font-cloudWorld text-black text-center">
          Статьи конституции и других правовых актов, подходящих под эту историю
        </h3>
        <div className="accordion">
          {accordionDataFinal_1.map(({ title, content, id }) => (
            <Accordion title={title} content={content} key={id} />
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          <ButtonStories link="/stories/red-hat" text="Попробовать снова" />
        </div>
      </div>
    </section>
  );
}
