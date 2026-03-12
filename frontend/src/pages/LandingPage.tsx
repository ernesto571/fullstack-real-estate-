import Hero from "../components/LandingPageComponents/Hero";
import HowItWorks from "../components/LandingPageComponents/HowItWorks";

export default function LandingPage(){

    return (
        <main>
            <section>
                <Hero />
            </section>

            <section>
                <HowItWorks />
            </section>
        </main>
    )
}