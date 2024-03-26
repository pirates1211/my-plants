// import sections
import SecHero from '../components/section/SecHero'
import SecCatalog from '../components/section/SecCatalog'
import SectionInformation from '../components/section/SectionInformation'
import Testimoni from '../components/section/Testimoni'

export default function Home() {
    return (
        <>
            <SecHero />
            <SectionInformation />
            <SecCatalog />
            <Testimoni />
        </>
    )
}
