'use client';

import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item text-base text-black font-cloudWorld bg-[#9d9d9d] rounded-lg py-1 my-4">
      <div
        className="accordion-title flex justify-between p-1 text-lg"
        onClick={() => setIsActive(!isActive)}
      >
        <h6>{title}</h6>
        <p className="mr-3 text-xl">{isActive ? '-' : '+'}</p>
      </div>
      {isActive && (
        <div className="accordion-content bg-[#959092] rounded-lg px-1">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
