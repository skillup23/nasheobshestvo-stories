import imgData from '@/public/stories/RedHat/RH_chapter2.jpg';
import Image from 'next/image';
import ButtonStories from '@/components/ButtonStories';
import PageBook from '@/components/PageBook';
import TitleChapter from '@/components/TitleChapter';

export default function RedHatChapter2_1() {
  return (
    <div className="flex items-center flex-col">
      <TitleChapter text="Глава 2" />
      <PageBook
        pageOne={
          <div className="red-hat-fon p-3 rounded-lg max-w-md">
            <Image
              src={imgData}
              width={500}
              height={500}
              alt="Красная шапочка печет пирожки дома"
              className="my-5 rounded-lg"
              priority
            />
            <p className="text-normal">
              Днем 13.13.2013 г. в 13:13 Красная Шапочка, как ни в чем небывало,
              проснулась, сделала зарядку, выпила натощак стакан холодной воды и
              решила испечь пирожков для своей горячо любимой бабушки. Используя
              услуги мобильной связи 🥧, Шапочка позвонила маме и попросила
              напомнить правильные пропорции всех необходимых ингредиентов. Мама
              в момент звонка находилась на перерыве и отдыхала от выполнения
              своих трудовых функций 🥧 экскурсовода, поэтому смогла подробно
              рассказать все своей непутевой любимой дочери.
            </p>
            <p className="text-normal mt-2">
              Во время выпекания пирожков Шапочка в фоновом режиме слушала
              телевизор, по которому рассказывали про недавно состоявшиеся
              сказочные выборы в ее прекрасной стране 🥧. Через пару часов
              пирожки были готовы, и Красная Шапочка отправилась в путь.
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/chapter-3/choice-1"
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
              alt="Красная шапочка печет пирожки дома"
              className="my-5 rounded-lg"
              priority
            />
            <p className="text-normal">
              Днем 13.13.2013 г. в 13:13 Красная Шапочка, как ни в чем небывало,
              проснулась и решила проведать свою горячо любимую бабушку.
              Используя услуги мобильной связи 🥧, Шапочка позвонила маме и
              предупредила ее о своем намерении посетить старушку. Мама в момент
              звонка находилась на перерыве и отдыхала от выполнения своих
              трудовых обязанностей 🥧 экскурсовода и была не против желаний
              дочери, тем более что бабушка жила в доме престарелых, а
              родственники посещали ее неделю назад.
            </p>
            <p className="text-normal mt-2">
              Шапочка сходила в магазин, купила любимый бабушкин пирог и
              отправилась в путь.
            </p>
            <div className="flex gap-2 justify-center">
              <ButtonStories
                link="/stories/red-hat/chapter-3/choice-1"
                text="Выбрать"
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
