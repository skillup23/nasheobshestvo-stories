import ButtonStories from '@/components/ButtonStories';
import imgData from '@/public/stories/RedHat/RH_start1.jpg';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import { accordionDataFinal_1 } from '@/public/stories/RedHat/final/accordeon';

export default function RedHatFinal_1() {
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
          Законы и статьи, которые вы собрали на этом пути
        </h3>
        <div className="accordion">
          {accordionDataFinal_1.map(({ title, content, id }) => (
            <Accordion
              title={title}
              key={id}
              styleCustom="bg-black text-white rounded-[10px]"
            >
              {content}
            </Accordion>
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          <ButtonStories link="/stories" text="Попробовать снова" />
        </div>
      </div>
    </section>
  );
}
