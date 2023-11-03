import { roboto, merriweather, mobster, indieFlower, inconsolata, openSans, oswald, raleway, playfairDisplay, lora, slabo13px, nunito, titilliumWeb, mukta, dosis, anton, dancingScript, exo2, teko } from '@/styles/fonts'
import {SectionComponent} from "../components/SectionComponent";

const some = [
  {
    "name": roboto,
    "title": "Roboto",
    "link": "https://fonts.google.com/specimen/Roboto",
    "fullName": "F",
    "textTitle": "Roboto title",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod justo pharetra, porta ipsum vel, hendrerit mauris. Praesent elementum, mauris scelerisque malesuada fermentum, arcu ante egestas ante, a gravida dolor risus vel ligula. Cras in nulla bibendum, posuere diam nec, posuere est. Pellentesque ullamcorper magna urna, at tincidunt risus placerat sit amet. Sed rutrum.",
    "color": "#FF6633",
    "gradient": "from-rose-500 to-blue-500",
    "image": ""
  },
  {
    "name": merriweather,
    "title": "Merriweather",
    "link": "https://fonts.google.com/specimen/Merriweather",
    "fullName": "F",
    "textTitle": "Merriweather title",
    "text": "Aliquam sagittis est id lorem maximus, eu venenatis lectus laoreet. Duis semper magna eu nibh commodo, vitae interdum orci semper. Proin maximus, sem sit amet ornare molestie, ante mauris accumsan lacus, vel faucibus tortor ligula sed purus. Nunc vitae vulputate elit. In ut aliquet felis, nec pretium nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent.",
    "color": "#FFB399",
    "gradient": "from-pink-800 to-indigo-500"
  },
  {
    "name": mobster,
    "title": "Mobster",
    "link": "https://fonts.google.com/specimen/Mobster",
    "fullName": "F",
    "textTitle": "Mobster title",
    "text": "Sed id augue arcu. Pellentesque arcu ante, eleifend vitae maximus in, placerat vitae ex. Sed blandit magna consectetur interdum efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse in venenatis massa. Maecenas lorem diam, cursus ut egestas at, ornare vestibulum enim. Class aptent taciti sociosqu ad litora torquent per.",
    "color": "#FF33FF",
    "gradient": "from-emerald-800 to-fuchsia-500",
    "image": ""
  },
  {
    "name": indieFlower,
    "title": "Indie Flower",
    "link": "https://fonts.google.com/specimen/Indie+Flower",
    "fullName": "F",
    "textTitle": "Indie Flower title",
    "text": "Fusce posuere aliquam dignissim. Nullam quis felis tortor. Pellentesque vehicula efficitur vulputate. Praesent molestie odio eu dui eleifend, vitae feugiat tellus ultricies. Suspendisse potenti. Sed elementum mollis nulla, eu sollicitudin lectus ullamcorper sed. Aenean sollicitudin sed dui et auctor. Duis elementum dapibus tempor. Ut aliquet feugiat risus eu posuere. Vivamus scelerisque.",
    "color": "#FFFF99",
    "gradient": "from-purple-500 to-pink-500"
  },
  {
    "name": inconsolata,
    "title": "Inconsolata",
    "link": "https://fonts.google.com/specimen/Inconsolata",
    "fullName": "F",
    "textTitle": "Inconsolata title",
    "text": "Aenean sit amet euismod lectus, a blandit lorem. Donec diam sapien, porta vel ligula ultrices, dapibus ultrices mauris. Aliquam id scelerisque mi, sit amet fringilla mi. Sed in efficitur sem. Donec eu tristique quam, sit amet dapibus metus. Sed sed tincidunt metus. Quisque mollis iaculis malesuada. Nulla ut mauris quis mauris eleifend venenatis at ac nibh. Donec sed neque auctor.",
    "color": "#00B3E6",
    "gradient": "from-fuchsia-500 to-blue-500"
  },
  {
    "name": openSans,
    "title": "Open Sans",
    "link": "https://fonts.google.com/specimen/Open+Sans",
    "fullName": "F",
    "textTitle": "Open Sans title",
    "text": "Integer et consequat tellus. Mauris vulputate, arcu at consectetur porta, est felis porta libero, nec hendrerit quam augue sed turpis. Praesent purus purus, mattis vel cursus ut, vestibulum ac purus. Integer ac pellentesque nibh. Praesent faucibus turpis sed neque pellentesque, nec laoreet ex tristique. Aenean posuere fringilla bibendum. Integer volutpat, justo id vestibulum.",
    "color": "#E6B333",
    "gradient": "from-lime-500 to-indigo-500",
    "image": ""
  },
  {
    "name": oswald,
    "title": "Oswald",
    "link": "https://fonts.google.com/specimen/Oswald",
    "fullName": "F",
    "textTitle": "Oswald title",
    "text": "Aliquam erat volutpat. Donec dictum est sit amet dignissim sagittis. Nullam in sem vitae lorem laoreet consectetur blandit eget ante. Sed vitae interdum quam. Mauris ut risus eu sapien dictum bibendum ut ut enim. Duis vel sem sit amet urna aliquam semper congue at purus. Cras condimentum massa eu lectus malesuada, at feugiat eros sodales. Etiam ut nulla non libero rhoncus blandit.",
    "color": "#3366E6",
    "gradient": "from-violet-500 to-fuchsia-500"
  },
  {
    "name": raleway,
    "title": "Raleway",
    "link": "https://fonts.google.com/specimen/Raleway",
    "fullName": "F",
    "textTitle": "Raleway title",
    "text": "Duis ut arcu nec quam laoreet vehicula ut et justo. Maecenas facilisis, metus a ullamcorper aliquam, tellus massa sagittis mi, tristique posuere diam nisi quis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi nec facilisis dui, vel efficitur neque. Nam vestibulum ante vel mollis facilisis. Praesent blandit sem nec ipsum ultricies porta.",
    "color": "#999966",
    "gradient": "from-purple-500 to-lime-500",
    "image": ""
  },
  {
    "name": playfairDisplay,
    "title": "Playfair Display",
    "link": "https://fonts.google.com/specimen/Playfair+Display",
    "fullName": "F",
    "textTitle": "Playfair Display title",
    "text": "Vivamus nec rhoncus turpis. Donec quis risus quis eros ultricies venenatis at nec velit. Curabitur nec sodales mi. Phasellus varius ornare massa. Ut quis leo aliquam nunc elementum ornare ut a erat. Phasellus in mi a arcu molestie aliquam. Pellentesque sodales ac leo eu tempor. Nam ullamcorper ex sit amet libero eleifend, ut tristique enim viverra. Sed vel venenatis enim.",
    "color": "#99FF99",
    "gradient": "from-rose-500 to-blue-500"
  },
  {
    "name": lora,
    "title": "Lora",
    "link": "https://fonts.google.com/specimen/Lora",
    "fullName": "F",
    "textTitle": "Lora title",
    "text": "Vivamus cursus tempus ligula ut rhoncus. Vivamus id varius urna. Vestibulum a dui pretium, molestie metus quis, pharetra ligula. Morbi malesuada leo dictum justo suscipit, id consectetur sapien imperdiet. Ut vitae neque blandit, tincidunt risus ac, faucibus ligula. Phasellus eu ex porttitor, efficitur lectus ac, posuere purus. Nullam dapibus, tellus eget dictum sollicitudin.",
    "color": "#B34D4D",
    "gradient": "from-yellow-700 to-zinc-500"
  },
  {
    "name": slabo13px,
    "title": "Slabo 13px",
    "link": "https://fonts.google.com/specimen/Slabo+13px",
    "fullName": "F",
    "textTitle": "Slabo 13px title",
    "text": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer fringilla aliquet nibh, et pretium metus aliquet sit amet. Aliquam elit tortor, fermentum in massa eu, cursus consequat nibh. Nulla convallis nisi nec elit cursus, non tempor nunc ultricies. Integer hendrerit justo est, quis consequat diam commodo scelerisque. Donec molestie.",
    "color": "#80B300",
    "gradient": "from-violet-500 to-fuchsia-500",
    "image": ""
  },
  {
    "name": nunito,
    "title": "Nunito",
    "link": "https://fonts.google.com/specimen/Nunito",
    "fullName": "F",
    "textTitle": "Nunito title",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus nisi sit amet nulla tempus iaculis. Sed ut aliquet ex. Etiam commodo, tellus quis elementum suscipit, quam dolor aliquam elit, nec condimentum nulla enim vel turpis. Morbi id eros quis ex aliquet gravida. Nulla nec lacinia nisi, sed blandit tellus. Donec porttitor congue dui, id pharetra leo accumsan congue.",
    "color": "#809900",
    "gradient": "from-purple-500 to-pink-500"
  },
  {
    "name": titilliumWeb,
    "title": "Titillium Web",
    "link": "https://fonts.google.com/specimen/Titillium+Web",
    "fullName": "F",
    "textTitle": "Titillium Web title",
    "text": "Donec a lacus eu urna maximus auctor ut sed lectus. Vestibulum in iaculis enim, ut aliquam lacus. Maecenas a luctus purus. Suspendisse dolor sem, mollis commodo nunc ut, varius cursus purus. Etiam ultrices est lorem, in pharetra dolor volutpat eu. Nam lobortis diam elit. Nullam et elit id mauris sodales ultricies at eu nisi. Phasellus maximus magna quam, at elementum odio vulputate sed.",
    "color": "#E6B3B3",
    "gradient": "from-rose-500 to-blue-500",
    "image": ""
  },
  {
    "name": mukta,
    "title": "Mukta",
    "link": "https://fonts.google.com/specimen/Mukta",
    "fullName": "F",
    "textTitle": "Mukta title",
    "text": "Nullam volutpat tellus non dapibus volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a varius nibh. Etiam sit amet lacus id est cursus imperdiet nec a metus. Suspendisse lobortis et dolor vitae tempus. Fusce justo ipsum, blandit in eleifend vel, imperdiet et neque. In ornare eu mi id interdum. Proin pretium diam in dui commodo facilisis.",
    "color": "#6680B3",
    "gradient": "from-sky-500 to-indigo-500"
  },
  {
    "name": dosis,
    "title": "Dosis",
    "link": "https://fonts.google.com/specimen/Dosis",
    "fullName": "F",
    "textTitle": "Dosis title",
    "text": "Nullam blandit arcu ac nunc imperdiet auctor. Integer eget mauris ac ipsum dignissim pharetra. Nulla fermentum, elit non rhoncus egestas, erat nibh molestie massa, sit amet condimentum ipsum massa nec erat. Nulla bibendum sapien ac dui commodo, in malesuada turpis finibus. Donec accumsan tellus dolor, ac viverra eros posuere sed. Nunc pretium, massa eget venenatis iaculis, felis ligula.",
    "color": "#66991A",
    "gradient": "from-violet-500 to-fuchsia-500"
  },
  {
    "name": anton,
    "title": "Anton",
    "link": "https://fonts.google.com/specimen/Anton",
    "fullName": "F",
    "textTitle": "Anton title",
    "text": "Cras convallis condimentum tellus, ac dignissim ante fermentum vitae. Morbi tempor nunc nibh, sed fringilla nibh hendrerit at. Maecenas pretium lectus turpis, ac dignissim turpis egestas ac. Aliquam erat volutpat. Integer nec tellus cursus, dapibus lacus vel, porta mauris. Nunc consectetur libero ut nibh congue, id aliquet arcu venenatis. Mauris gravida eros et augue rhoncus suscipit.",
    "color": "#FF99E6",
    "gradient": "from-purple-500 to-pink-500",
    "image": ""
  },
  {
    "name": dancingScript,
    "title": "Dancing Script",
    "link": "https://fonts.google.com/specimen/Dancing+Script",
    "fullName": "F",
    "textTitle": "Dancing Script title",
    "text": "Vivamus fermentum sed tortor eu ultrices. Donec volutpat accumsan odio sed semper. Morbi in aliquet sem. Vestibulum sodales tortor et massa fringilla fringilla. Mauris laoreet libero id vulputate auctor. Maecenas tristique, elit nec imperdiet rutrum, nibh ipsum consectetur odio, a interdum libero magna non purus. Fusce velit dui, ultrices vel luctus sit amet, semper eu lectus.",
    "color": "#CCFF1A",
    "gradient": "from-rose-500 to-blue-500"
  },
  {
    "name": exo2,
    "title": "Exo 2",
    "link": "https://fonts.google.com/specimen/Exo+2",
    "fullName": "F",
    "textTitle": "Exo 2 title",
    "text": "Donec ac sem ullamcorper, venenatis sapien sed, vehicula velit. Suspendisse potenti. Nam iaculis in ligula eget tincidunt. Integer sem erat, laoreet eget finibus at, pretium quis leo. Quisque ac mi semper, tempus metus eget, feugiat sapien. Nunc pellentesque sem et finibus sollicitudin. Sed vulputate, libero vel ultrices auctor, ex velit luctus purus, ut luctus urna urna eu tellus.",
    "color": "#FF1A66",
    "gradient": "from-red-500 to-indigo-500"
  },
  {
    "name": teko,
    "title": "Teko",
    "link": "https://fonts.google.com/specimen/Teko",
    "fullName": "F",
    "textTitle": "Teko title",
    "text": "Duis sit amet ultricies augue, sit amet aliquet dolor. Maecenas aliquam massa ac magna maximus, ac vulputate tortor imperdiet. Vestibulum suscipit est varius bibendum fermentum. Curabitur vitae mauris ac ex fermentum condimentum. Sed in malesuada dui. Suspendisse ornare rutrum massa, porttitor aliquet eros tristique eu. Nullam tincidunt pretium mi id pharetra. Sed in libero vel arcu.",
    "color": "#E6331A",
    "gradient": "from-green-500 to-pink-700"
  },
]
export default function Home() {

  return (
    <div className='w-full flex flex-col items-center'>
      {some.map((
        {link, title, name, textTitle, text, gradient}, index, array) =>
        <SectionComponent
          key={index}
          font={name}
          name={title}
          link={link}
          title={textTitle}
          text={text}
          gradient={gradient}
          otherFonts={array.filter(i => i.title !== title)}
        />
      )}
    </div>
  )
}
