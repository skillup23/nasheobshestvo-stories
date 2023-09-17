import testFoto from '@/public/stories/RedHat/testNew.png';
import Image from 'next/image';
import ButtonStories from '@/components/ButtonStories';
import PageBook from '@/components/PageBook';
import TitleChapter from '@/components/TitleChapter';

export default function RedHatChapter4_2() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-2">
      <TitleChapter text="Глава 4" />
      <PageBook
        pageOne={
          <div className="red-hat-fon p-3 rounded-lg">
            <Image
              src={testFoto}
              width={500}
              height={500}
              alt="Тестовая картинка"
              className="my-5"
              priority
            />
            <p className="text-normal">Финал 2го пути</p>
            <p className="text-normal mt-2">Финал 2го пути</p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/final/choice-2"
                text="Конец"
              />
            </div>
          </div>
        }
        pageTwo={
          <div className="red-hat-fon p-3 rounded-lg z-10">
            <Image
              src={testFoto}
              width={500}
              height={500}
              alt="Тестовая картинка"
              className="my-5"
              priority
            />
            <p className="text-normal">Финал 4го пути</p>
            <p className="text-normal mt-2">Финал 4го пути</p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/final/choice-4"
                text="Конец"
              />
            </div>
          </div>
        }
      />
    </section>
  );
}
