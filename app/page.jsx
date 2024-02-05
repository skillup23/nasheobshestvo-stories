import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl">Истории Нашего Общества</h1>
      <div className="flex flex-col gap-5 mt-10">
        <Link
          href="/stories/red-hat"
          className="text-xl text-center border p-3"
        >
          Красная шапочка
        </Link>
        <Link href="#" className="text-xl text-center border p-3">
          Поиск определений
        </Link>
        <Link href="/dashboard" className="text-xl text-center border p-3">
          Панель управления
        </Link>
      </div>
    </main>
  );
}
