import App from '../components/App'
import {data} from '/src/data/data'

export async function getStaticProps() {
  const allFonts = data;
  return {
    props: {
      allFonts,
    }
  }
}
export default function Home({allFonts}) {
  return (
    <App allFonts={allFonts} />
  )
}
