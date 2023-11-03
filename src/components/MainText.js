import React from 'react';

const MainText = ({font, title, text}) => {
  return (
    <div className={`${font.className} text-white max-w-lg mr-4 w-fit `}>
      <h1 className={`font-medium text-4xl my-4`}>{title}</h1>
      <p className='font-normal'>{text}</p>
    </div>
  );
};

export default MainText;
