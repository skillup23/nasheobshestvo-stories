import Link from 'next/link';

export default function ButtonStories({ link, text, styleButton }) {
  if (!styleButton) {
    styleButton = '';
  }
  return (
    <Link
      href={link}
      className={`text-xl uppercase bg-black rounded-3xl font-comial px-7 py-2 my-4 ${styleButton}`}
    >
      {text}
    </Link>
  );
}
