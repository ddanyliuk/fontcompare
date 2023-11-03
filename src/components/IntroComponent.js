import React from 'react';
import {dancingScript, inconsolata, indieFlower} from '@/styles/fonts'

const IntroComponent = () => {
  return (
    <div className="px-4 h-[75vh] bg-gray-700 flex flex-col justify-center items-center">
      <div className="max-w-4xl flex flex-col justify-center items-center m-auto text-center">
        <h1 className={`${dancingScript.className} text-white text-[72px] mb-[0.5rem] sm:text-[96px]`}>FontCompare</h1>
        <p className={`${inconsolata.className} text-xl text-cyan-600 mb-4`}>There are over 600 typefaces in the Google web fonts directory. Many of them are awful. Below you can find the most popular Google fonts. Project has been design to give a possibility to compare
          fonts and see the typeface on UI.
        </p>
        <p className={`${indieFlower.className} text-orange-500`}>All fonts used are available for free on <a href="https://www.google.com/fonts" target="_blank">Google Fonts</a>. Ipsums found via <a href="http://meettheipsums.com/" target="_blank">meettheipsums.com</a>.
          All images used for this project are from
          <a href="https://unsplash.com/" target="_blank">unsplash.com</a>
          with free licence. This site was inspired by <a href="https://bchiang7.github.io/fontipsums/" target="_blank">this</a>,
          <a className="underline text-cyan-300" href="http://bueltge.de/free-web-font-combinations/" target="_blank">this</a>,
          and <a className="underline text-cyan-300" href="http://femmebot.github.io/google-type/" target="_blank">this</a>.</p>
      </div>
    </div>
  );
};

export default IntroComponent;
