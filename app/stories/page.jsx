import Image from 'next/image';
import ButtonStories from '@/components/ButtonStories';
import imgLogo from '@/public/stories/logoNew.png';
import imgManual from '@/public/stories/manual/manual1.png';
import imgManual2 from '@/public/stories/manual/manual2.png';
import Accordion from '@/components/Accordion';

export const metadata = {
  title: 'Сказки Нашего Общества',
  description: 'Изучение обществознания в сказительной форме',
};

export default function Stories() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-2">
      <h1 className="text-4xl font-comial mb-4 mt-8">Сказки Нашего Общества</h1>
      <div className="red-hat-fon p-3 rounded-lg max-w-md">
        <p className="text-base text-center font-cloudWorld text-black">
          Изучение обществознания в сказительной форме
        </p>
        <Image
          src={imgLogo}
          width={500}
          height={500}
          alt="Красная шапочка"
          className="my-5 rounded-lg"
          priority
        />
        <Accordion
          title="Краткая инструкция."
          key={1}
          styleCustom="bg-black text-white"
          styleCustomTitle="px-4"
        >
          <p className="text-base font-cloudWorld text-black">
            1. Чуть ниже распологается список сказок. Выберите любую из них,
            кликнув на нее.
          </p>
          <p className="text-base font-cloudWorld text-black">
            2. На протяжении познавательной сказки вы встретите знакомых героев
            и иногда сможете сделать выбор, изменив сюжет. Для этого вверху
            некоторых страниц есть неколько вкладок (Вариант 1 и Вариант2).
            Переключаясь между ними вы меняете историю, которая приведет к
            различным финалам. В самом низу страницы располагается кнопка
            ВЫБРАТЬ, которая позволяет указать ваш выбор сюжета.
          </p>
          <Image
            src={imgManual}
            width={500}
            height={500}
            alt="Красная шапочка"
            className="my-5 rounded-lg"
            priority
          />
          <p className="text-base font-cloudWorld text-black">
            3. Так же в каждом сюжете встечаются отсылки к определенным законам
            или статьям правового поля РФ. Все отсылки будут сгрупированны в
            финале для последующего изучения.
          </p>
          <Image
            src={imgManual2}
            width={500}
            height={500}
            alt="Красная шапочка"
            className="my-5 rounded-lg"
            priority
          />
        </Accordion>

        <div className="flex gap-2 justify-center flex-col">
          <ButtonStories
            link="/stories/red-hat/start"
            text="Красная шапочка"
            styleButton="text-center"
          />
          <ButtonStories link="/" text="На Главную" styleButton="text-center" />
        </div>
      </div>
    </section>
  );
}
