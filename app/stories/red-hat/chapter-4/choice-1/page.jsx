import testFoto from '@/public/stories/RedHat/testNew.png';
import Image from 'next/image';
import ButtonStories from '@/components/ButtonStories';
import PageBook from '@/components/PageBook';
import TitleChapter from '@/components/TitleChapter';

export default function RedHatChapter4_1() {
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
            <p className="text-normal">
              На пороге бабушкиного дома появляется Красная Шапочка. Она
              заходит, ставит корзинку на стол и подходит к кровати. Бабушка
              спит. «Бабуля наверняка заплатила налоги (13) ещё две недели
              назад, а потому спит спокойно» – подумала Красная Шапочка.
            </p>
            <p className="text-normal mt-2">
              Спустя пару минут Волку надоедает притворяться спящим, и он делает
              вид, что просыпается. Тут уж Красная Шапочка обратила внимание на
              необычный вид бабушки и спросила, почему у нее такие большие руки
              (получила ответ: «чтобы обнимать тебя»). Задала второй вопрос:
              «Почему у тебя такие маленькие уши?» («потому что я недавно
              сделала себе пластическую операцию по уменьшению ушей (14)»).
              Потом ещё был вопрос про глаза. Но последний вопрос – про зубы –
              оказался фатальным. После ответа «чтобы тебя съесть», Волк сожрал
              Красную Шапочку.
            </p>
            <p className="text-normal mt-2">
              Его рычание услышали соседи и вызвали сказочную полицию. Храбрые
              полицейские ворвались в квартиру к бабушке, вспороли живот Волку и
              из него выбрались Красная Шапочка и её бабушка. Они
              незамедлительно в предусмотренном законе порядке дали показания
              потерпевших, а соседи дали свидетельские показания (15)
              относительно совершенного преступления (всё было занесено в
              протокол). Наказали Волка по всей строгости закона. Во время
              отбывания наказания в сказочной тюрьме он осознал, что поступил
              неправильно и раскаялся. А тут и амнистия подоспела, которую
              объявила нижняя палата сказочного парламента (16).
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/final/choice-1"
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
            <p className="text-normal">Финал 3го пути</p>
            <p className="text-normal mt-2">Финал 3го пути</p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/final/choice-3"
                text="Конец"
              />
            </div>
          </div>
        }
      />
    </section>
  );
}
