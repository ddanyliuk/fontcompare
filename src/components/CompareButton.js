import React from 'react';

const CompareButton = ({handleComparedEvent, font, title, compareIsActive}) => {
  return (
    <button onClick={() => handleComparedEvent(title)}
            className={`${font.className} ml-auto w-8 self-end font-bold bg-black text-white rounded-2xl px-2 py-1`}>
      {!compareIsActive ? 'Compare' : 'Reset'}
    </button>
  );
};

export default CompareButton;
