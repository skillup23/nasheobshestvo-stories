'use client';

import React, { useState } from 'react';

const Accordion = ({ title, children, styleCustom, styleCustomTitle }) => {
  const [isActive, setIsActive] = useState(false);

  if (!styleCustom) {
    styleCustom = '';
  }

  if (!styleCustomTitle) {
    styleCustomTitle = '';
  }

  return (
    <div
      className={`accordion-item text-base text-black font-cloudWorld bg-[#9d9d9d] py-1 my-4 ${styleCustom}`}
    >
      <div
        className={`accordion-title flex p-1 text-lg ${styleCustomTitle}`}
        onClick={() => setIsActive(!isActive)}
      >
        <h6 className="mr-3">{title}</h6>
        <p className="mr-3 text-xl">{isActive ? '🥧' : '🍄'}</p>
      </div>
      {isActive && (
        <div className="accordion-content bg-white rounded-lg px-1 pt-1 text-black">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
