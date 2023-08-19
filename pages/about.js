import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';


export default function AboutPage() {

    const pageHeader = `About | ${process.env.siteTitle}`

    return <div className="container mx-auto py-6 sm:py-12">

        <SEO title={ pageHeader } />

        <PageTitle text="About Us" />

        <p className="text-gray-600 font-secondary text-base sm:text-lg max-w-6xl mx-auto px-3 leading-7">
            Velit id adipisicing enim deserunt labore reprehenderit non officia do deserunt. Eu reprehenderit irure occaecat amet cupidatat sit non.
            Exercitation nulla exercitation sit ipsum sint. Nulla culpa excepteur excepteur labore non minim aliqua exercitation ad. Ad adipisicing do
            est laborum consectetur excepteur aliqua id amet pariatur. Sunt magna veniam irure officia duis anim aliquip ipsum sint occaecat enim.
        </p>

    </div>
}
