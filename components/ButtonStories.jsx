import Link from 'next/link';

export default function ButtonStories({ link, text, styleButton, data }) {
  if (!styleButton) {
    styleButton = '';
  }
  return (
    <Link
      // href={link}
      href={{
        pathname: link,
        query: {
          data: data,
        },
      }}
      className={`text-xl uppercase bg-black rounded-3xl font-comial px-7 py-2 my-4 ${styleButton}`}
    >
      {text}
    </Link>
  );
}
