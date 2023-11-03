import React from 'react';

const MainText = ({font, compareIsActive, title, text}) => {
  return (
    <div className={`${font.className} text-gray-200 max-w-lg mr-4 w-${compareIsActive ? '2': '3'}/6 `}>
      <h1 className={`font-medium text-4xl my-4`}>{title}</h1>
      <p className='font-normal'>{text}</p>
    </div>
  );
};

export default MainText;
