import SearchBar from '@/components/SearchBar';
import React from 'react';

export const metadata = {
  title: 'Поиск определений',
  description: 'Поиск определений Нашего Общества',
};

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

const SearchInfo = async () => {
  // const data = await getData();

  return (
    <div className="m-8 flex flex-col justify-center max-w-lg">
      <SearchBar />
      {/* {data.map((item) => (
        <div key={item.id}>
          <h2 className="mt-3">{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))} */}
    </div>
  );
};

export default SearchInfo;
