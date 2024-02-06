import imgData from '@/public/stories/RedHat/RH_chapter1.jpg';
import Image from 'next/image';
import ButtonStories from '@/components/ButtonStories';
import PageBook from '@/components/PageBook';
import TitleChapter from '@/components/TitleChapter';

export default function RedHatChapter1() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-2">
      <TitleChapter text="Глава 1" />
      <PageBook
        pageOne={
          <div className="red-hat-fon p-3 rounded-lg max-w-md">
            <Image
              src={imgData}
              width={500}
              height={500}
              alt="Тестовая картинка"
              className="my-5 rounded-lg"
              priority
            />
            <p className="text-normal">
              Красная Шапочка жила в отдельной квартире со всеми удобствами
              вместе с мамой и папой. Шапочка была прилежной дочерью и исполняла
              все свои обязанности по дому. Вместе с тем, знала и свои права, а
              именно право жить и воспитываться в семье, право на имя
              (нормальное), (паспорт с фамилией-именем) отчество и фамилию,
              право выражать свое мнение (2).
            </p>
            <p className="text-normal mt-2">
              Свое имя Шапочка получила благодаря необычному головному убору
              ярко красного цвета, сшитого для нее бабушкой. Шапочка сама ходила
              по магазинам, чтобы купить ткань (3), из которой бабушка ей и
              сшила шапочку.
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/chapter-2/choice-1"
                text="Выбрать"
              />
            </div>
          </div>
        }
        pageTwo={
          <div className="red-hat-fon p-3 rounded-lg z-10 max-w-md">
            <Image
              src={imgData}
              width={500}
              height={500}
              alt="Тестовая картинка"
              className="my-5 rounded-lg"
              priority
            />
            <p className="text-normal">
              Красная Шапочка жила в отдельной квартире со всеми удобствами.
              Отец и мать были в разводе. Красная шапочка жила вместе с мамой,
              отец же платил алименты (11) и виделся с дочерью по выходным. Зная
              свои права, а именно право жить и воспитываться в семье, право на
              имя (нормальное),(паспорт сфамилией-именем) отчество и фамилию,
              право выражать свое мнение (2), а так же используя любовь и
              чувство вины своих родителей, Красная Шапочка была бунтаркой и
              часто ссорилась с родителями.
            </p>
            <p className="text-normal mt-2">
              Свое имя Шапочка получила благодаря необычному головному убору
              ярко красного цвета, сшитого для нее бабушкой. Шапочка сама ходила
              по магазинам, чтобы купить ткань (3), из которой бабушка ей и
              сшила шапочку.
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/chapter-2/choice-2"
                text="Выбрать"
              />
            </div>
          </div>
        }
      />
    </section>
  );
}
