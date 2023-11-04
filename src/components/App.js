import Head from 'next/head'
import {SectionComponent} from "./SectionComponent";
import IntroComponent from "./IntroComponent";

const App = ({allFonts}) => {
  return (
    <>
      <Head>
        <title>FontCompare</title>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="shortcut icon" href="/images/favicon-32x32.png"/>
        <meta name="keywords" content="comparing fonts, font combination"/>
        <meta name="author" content="Dimi Danyliuk"/>
        <meta name="description" content="Google Web fonts with various ipsums"/>
        <meta property="og:description" content="Google Web fonts with various ipsums"/>
        <meta property="og:image" content=""/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:title" content="FontCompare"/>
        <meta property="og:url" content="https://dimidanyliuk.com/fontcompare"/>
        <meta property="og:type" content="website"/>
      </Head>
      <IntroComponent />
      <div className='w-full flex flex-col items-center'>
        {allFonts.map((
          {link, image, title, name, textTitle, text, gradient}, index, array) =>
          <SectionComponent
            key={index}
            font={name}
            name={title}
            link={link}
            title={textTitle}
            text={text}
            gradient={gradient}
            image={image}
            otherFonts={array.filter(i => i.title !== title)}
          />
        )}
      </div>
    </>
  );
};

export default App;
