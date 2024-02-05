import imgData from "@/public/stories/RedHat/RH-chapter2.JPG";
import Image from "next/image";
import ButtonStories from "@/components/ButtonStories";
import PageBook from "@/components/PageBook";
import TitleChapter from "@/components/TitleChapter";

export default function RedHatChapter2_2() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-start p-2'>
      <TitleChapter text='Глава 2' />
      <PageBook
        pageOne={
          <div className='red-hat-fon p-3 rounded-lg max-w-md'>
            <Image
              src={imgData}
              width={500}
              height={500}
              alt='Тестовая картинка'
              className='my-5 rounded-lg'
              priority
            />
            <p className='text-normal'>
              Днем 13.13.2013 г. в 13:13 Красная Шапочка, как ни в чем небывало,
              проснулась и включила громко любимую песню одной известной
              панк-группы «Волчий вой», чтобы опять вызвать гнев и недовольство
              соседей, которые уже пытались законными средствами бороться с
              данным нарушением общественного порядка.
            </p>
            <p className='text-normal mt-2'>
              Спустя полчаса, как следует проснувшись, Красная Шапочка,
              используя услуги мобильной связи (4) позвонила бабушке и
              напросилась в гости.
            </p>
            <p className='text-normal mt-2'>
              Бабушка была не простой старушкой, а очень успешной и богатой
              бизнесвумен. Имея в активе гламурное модельное агентство,
              находчивая бабушка открывала подпольные казино и успешно
              сотрудничала с правоохранительными органами, давая взятки.
            </p>
            <div className='flex gap-2 justify-center'>
              <ButtonStories
                link='/stories/red-hat/chapter-3/choice-1'
                text='Выбрать'
              />
            </div>
          </div>
        }
        pageTwo={
          <div className='red-hat-fon p-3 rounded-lg z-10 max-w-md'>
            <Image
              src={imgData}
              width={500}
              height={500}
              alt='Тестовая картинка'
              className='my-5 rounded-lg'
              priority
            />
            <p className='text-normal'>
              Днем 13.13.2013 г. в 13:13 Красная Шапочка, как ни в чем небывало,
              проснулась и решила проведать свою горячо любимую бабушку.
              Используя услуги мобильной связи (4), Шапочка позвонила маме и
              предупредила ее о своем намерении посетить старушку. Мама в момент
              звонка находилась на перерыве и отдыхала от выполнения своих
              трудовых обязанностей (5) экскурсовода и была не против желаний
              дочери, тем более что бабушка жила в доме престарелых, а
              родственники посещали ее неделю назад.
            </p>
            <p className='text-normal mt-2'>
              Шапочка сходила в магазин, купила любимый бабушкин пирог и
              отправилась в путь.
            </p>
            <div className='flex gap-2 justify-center'>
              <ButtonStories
                link='/stories/red-hat/chapter-3/choice-2'
                text='Выбрать'
              />
            </div>
          </div>
        }
      />
    </section>
  );
}
