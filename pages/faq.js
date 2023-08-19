import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import FAQs from '../components/FAQs';


export default function FAQPage() {

    const pageHeader = `FAQ | ${process.env.siteTitle}`;

    return <div className="container mx-auto py-6 sm:py-12">

        <SEO title={pageHeader} />

        <PageTitle text='Frequenty Asked Questions' />

        <FAQs />

    </div>
}
