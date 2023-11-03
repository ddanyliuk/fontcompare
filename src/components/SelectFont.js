import React from 'react';

const SelectFont = ({font, handleFontSelect, otherFonts, handleActiveSelect, comparedFont, selectIsActive}) => {
  return (
    <div className={'w-10 flex flex-col text-white max-3xl: absolute h-11 top-0 -left-10'}>
      <div
        onClick={handleActiveSelect}
        className={`${font.className} flex bg-black/80 p-2 cursor-pointer rounded border-solid border`}>{comparedFont.title}
        <svg className={`iconClose ${selectIsActive ? 'is-open': ''} self-center ml-auto text-white`} viewBox="0 0 20 12">
          <line x1="2" y1="2" x2="8" y2="8" />
          <line x1="14" y1="2" x2="8" y2="8" />
        </svg>
      </div>
      <div className={`${selectIsActive ? 'h-full' : 'h'} scrollbar flex flex-col bg-black/75  overflow-y-scroll`}>
        {selectIsActive && otherFonts.map((i, index) =>
          <span
            onClick={() =>handleFontSelect(i.title)}
            className={`${i.name.className} ${i.title === comparedFont.title ? 'bg-red-400 text-gray-600' : ''} text-sm hover:underline cursor-pointer px-3 py-1`} key={index}>{i.title}</span>
        )}
      </div>
    </div>
  );
};

export default SelectFont;
