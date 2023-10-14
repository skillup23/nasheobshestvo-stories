"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function FormSendWords() {
  const [error, setError] = useState(null);
  const router = useRouter;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const text = e.target[1].value;
    const img = e.target[2].value || " ";

    try {
      await fetch("/api/words", {
        method: "POST",
        body: JSON.stringify({
          title,
          text,
          img,
        }),
      });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-full'>
      <form
        className='flex flex-col justify-center items-center gap-2 w-11/12 m-auto'
        onSubmit={handleSubmit}
      >
        <h2>Добавить новое определение</h2>
        <input
          type='text'
          placeholder='Заголовок'
          className='w-full bg-inherit border-zinc-50 border-2 p-1'
        />
        <textarea
          cols='30'
          rows='10'
          placeholder='Описание'
          className='w-full bg-inherit border-zinc-50 border-2 p-1'
        />
        <input
          type='text'
          placeholder='Ссылка на картинку'
          className='w-full bg-inherit border-zinc-50 border-2 p-1'
        />
        <button className='w-full bg-inherit border-zinc-50 border-2 p-1'>
          Отправить
        </button>
        {error && "Что-то случилось!"}
      </form>
    </div>
  );
}

export default FormSendWords;
