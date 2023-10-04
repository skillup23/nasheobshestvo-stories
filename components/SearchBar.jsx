'use client';

import useSWR from 'swr';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '@/public/search-info/data';

function SearchBar() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  console.log(data);

  const [activeSearch, setActiveSearch] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState([
    'Введите в поисковую строку название определения, которое хотите найти.',
    'Далее выберите из выпадающео списка подходящий вариант.',
    'Если в выпадающем списка такого нет, то данное определение отсутствует в нашем словаре.',
  ]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    if (e.target.value == '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words
        .filter((w) =>
          w.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .slice(0, 8)
    );
  };

  const handleClick = (text) => {
    setShowText(text);

    document.querySelector('input');
    setInputValue('');
    setActiveSearch([]);
  };

  return (
    <form className="m-w-[440px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Поиск определения"
          className="w-full p-4 rounded-full bg-slate-800"
          value={inputValue}
          onChange={(e) => handleSearch(e)}
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
          <AiOutlineSearch />
        </div>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s) => (
            <span
              className="cursor-pointer"
              key={s.title}
              onClick={() => handleClick(s.text)}
            >
              {s.title}
            </span>
          ))}
        </div>
      )}
      <div className="mt-8">
        {showText.map((item, index) => (
          <p className="mt-2" key={`${index}:${item}`}>
            {item}
          </p>
        ))}
      </div>
    </form>
  );
}

export default SearchBar;
