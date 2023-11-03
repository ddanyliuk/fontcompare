import {
  Roboto,
  Merriweather,
  Lobster,
  Indie_Flower,
  Inconsolata,
  Open_Sans,
  Oswald,
  Raleway,
  Playfair_Display,
  Lora,
  Slabo_13px,
  Nunito,
  Titillium_Web,
  Mukta,
  Dosis,
  Anton,
  Dancing_Script,
  Exo_2,
  Teko
} from 'next/font/google'


// define your variable fonts
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'], preload: false,  })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'], preload: false, })
const mobster = Lobster({ subsets: ['latin'], weight: '400',
  preload: false, })
const indieFlower = Indie_Flower({ subsets: ['latin'], weight: '400',
  preload: false })
const inconsolata = Inconsolata({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
const slabo13px = Slabo_13px({ subsets: ['latin'], weight: '400', preload: false, })
const nunito = Nunito({ subsets: ['latin'] })
const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: ['300', '400', '700'], preload: false, })
const mukta = Mukta({ subsets: ['latin'], weight: ['300', '400', '700'], preload: false,  })
const dosis = Dosis({ subsets: ['latin'] })
const anton = Anton({ subsets: ['latin'], weight: '400',
  preload: false, })
const dancingScript = Dancing_Script({ subsets: ['latin'] })
const exo2 = Exo_2({ subsets: ['latin'] })
const teko = Teko({ subsets: ['latin'] })


export { roboto, merriweather, mobster, indieFlower, inconsolata, openSans, oswald, raleway, playfairDisplay, lora, slabo13px, nunito, titilliumWeb, mukta, dosis, anton, dancingScript, exo2, teko }
