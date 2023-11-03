import React, {useEffect, useState} from 'react';
import MainText from "@/components/MainText";
import CompareButton from "@/components/CompareButton";
import SelectFont from "@/components/SelectFont";


export const SectionComponent = ({
  name,
  link,
  title,
  text,
  font,
  gradient,
  otherFonts
}) => {
  const [compareIsActive, setCompareIsActive] = useState(false)
  const [comparedFont, setComparedFont] = useState(null)
  const [selectIsActive, setSelectIsActive] = useState(false)

  const handleComparedEvent = () => setCompareIsActive(!compareIsActive)


  const handleFontSelect = (title) => setComparedFont(otherFonts.find(i => i.title === title))

  const handleActiveSelect = () => setSelectIsActive(!selectIsActive)

  useEffect(() => {
    if (compareIsActive && !comparedFont) {
      setComparedFont(otherFonts[0])
    }
  }, [compareIsActive])

  return (
    <div id={title} className={`w-full bg-gradient-to-r ${gradient} to-indigo-500 mx-auto flex flex-col`}>
      <div className='w-full flex flex-col py-10 px-6'>
        <div className={`flex flex-row mb-4`}>
          <h2 className={`${font.className} text-3xl text-white`}>{name} - <a className='underline hover:text-emerald-900 cursor-pointer' target='_blank' href={link}>Link to Google Fonts</a></h2>
          <div className={`ml-auto w-10 flex flex-row relative`}>
            {compareIsActive && comparedFont && (
              <SelectFont
                handleFontSelect={handleFontSelect}
                otherFonts={otherFonts}
                handleActiveSelect={handleActiveSelect}
                comparedFont={comparedFont}
                selectIsActive={selectIsActive}
                font={comparedFont.name}
              />
            )}

            <CompareButton
              compareIsActive={compareIsActive}
              font={font}
              title={title}
              handleComparedEvent={handleComparedEvent}
            />
          </div>
        </div>
        <div className={`${!compareIsActive ? 'self-center' : 'self-start'} h-72 flex flex-row flex-nowrap`}>
          <MainText text={text} title={title} compareIsActive={compareIsActive} font={font} />
          {compareIsActive && comparedFont &&
            <MainText text={comparedFont.text} title={comparedFont.textTitle} compareIsActive={compareIsActive} font={comparedFont.name} />
          }
        </div>
      </div>
    </div>
  );
};
