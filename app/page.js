import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl">Истории Нашего Общества</h1>
      <div className="flex mt-10">
        <Link href="/stories/red-hat" className="text-xl border p-3">
          Красная шапочка
        </Link>
      </div>
    </main>
  );
}
