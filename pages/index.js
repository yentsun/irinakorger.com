import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import FinalCTA from '../components/FinalCTA';


export default function IndexPage() {

    return <div>

        {/* hero section */}
        <Hero />

        <div className="relative mt-32">

            <div className="absolute inset-0 h-full w-full overflow-hidden mx-auto">
                <div className="w-4/5 h-full mx-auto rounded-full bg-gray-50 transform scale-x-150" />
            </div>

            <Services />

            <Benefits />
        </div>

        <Testimonials />

        <Features />

        {/* final call to action */}
        <FinalCTA />
    </div>
}
