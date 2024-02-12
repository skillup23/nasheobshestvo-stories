import imgData from '@/public/stories/RedHat/RH_chapter3.jpg';
import imgData2 from '@/public/stories/RedHat/RH_chapter3_2.jpg';
import Image from 'next/image';
import ButtonStories from '@/components/ButtonStories';
import PageBook from '@/components/PageBook';
import TitleChapter from '@/components/TitleChapter';

export default function RedHatChapter3_1() {
  return (
    <div className="flex items-center flex-col">
      <TitleChapter text="Глава 3" />
      <PageBook
        pageOne={
          <div className="red-hat-fon p-3 rounded-lg max-w-md">
            <Image
              src={imgData}
              width={500}
              height={500}
              alt="Красная шапочка идет по лесу и встречает волка"
              className="my-5 rounded-lg"
              priority
            />
            <p className="text-normal">
              Бабушка жила за Парковой рощей, которая относилась к землям отдыха
              и рекреации 🥧. Идти через безлюдный парк Шапочке было страшно, но
              денег воспользоваться сказочным трамваем 🥧 у нее не было – она
              все потратила на покупку лицензионной версии компьютерной игры
              «Убей Змей-Горыныча» 🥧.
            </p>
            <p className="text-normal mt-2">
              В парке ей попался «Волк 3.0» (далее по тексту – Волк, просто
              Волк), который пребывал в плохом настроении... Всего 10 минут
              назад он выкурил сигарету в неположенном месте, за что был
              оштрафован сотрудником сказочной полиции 🥧. Не добавляло хорошего
              настроения также то обстоятельство, что утром волку звонил
              сказочный пристав и строго напомнил о необходимости своевременно
              уплатить алименты на его двоих детей от первого брака (11).
            </p>
            <p className="text-normal mt-2">
              Когда тропинки Волка и Красной Шапочки пересеклись, они вежливо
              поздоровались и продолжили свой путь вместе. Во время беседы Волк
              понял, что Красная Шапочка направляется к своей богатой старой
              любимой бабушке и его пустые карманы в сочетании с низким уровнем
              правовой культуры породили в голове злой умысел на совершение
              преступления. Он извинился пред Красной Шапочкой (сказал, что
              «опаздывает») и побежал вперед.
            </p>
            <Image
              src={imgData2}
              width={500}
              height={500}
              alt="Волк и Кощей вламываются к бабушке"
              className="my-5 rounded-lg"
              priority
            />
            <p className="text-normal mt-2">
              По дороге он подыскивает пособника в лице Кощея Бессмертного и
              склоняет его к совершению преступления группой лиц по
              предварительному сговору – ограблению бабушки 🥧. Вместе они
              вламываются к бабушке. Забыв, что он хотел только ограбить
              старушку, волк съедает её, переодевается в её одежду, ложится в
              кровать и делает вид, что спит. Кощей Бессмертный убегает с
              награбленным.
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/chapter-4/choice-1"
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
              Бабушка жила за Парковой рощей, которая относилась к землям отдыха
              и рекреации 🥧. Идти через безлюдный парк Шапочке было лень, и она
              села в сказочный трамвай 🥧, покатилась через весь город в гости.
            </p>
            <p className="text-normal mt-2">
              Трамвай битком был набит незнакомцами, особо выделялся среди всех
              крупный серый Волк, который сидел, развалившись на два сидения и
              не уступал пожилым и беременным место. На все замечания
              кондуктора, Волк огрызался и чуть не устроил потасовку с другими
              пассажирами трамвая.
            </p>
            <p className="text-normal mt-2">
              Красная Шапочка решает выйти немного раньше, а Волк выскакивает за
              ней. По пути он начинает приставать к девушке, и она ускорят шаг,
              желая оторваться от преследователя. Когда впереди показываются
              сотрудниками сказочной полиции, Волк скрывается, а девушка все
              рассказывает представителям власти. Они берут показания, и просят
              посмотреть несколько фотографий разыскиваемых людей. Среди них
              оказывается Волк - известный наркоторговец. Полицейские, записав
              всю информацию, благодарят Шапочку за сотрудничество и
              отправляются на поиски преступника.
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/chapter-4/choice-3"
                text="Выбрать"
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
