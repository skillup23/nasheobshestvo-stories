import Header from '@/components/Header';

export const metadata = {
  title: 'Красная Шапочка',
  description: 'Истории Нашего Общества',
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
