import Hero from "@/components/sections/hero";
import WhyPebsol from "@/components/sections/why-pebsol";
import Solutions from "@/components/sections/solutions";
import HowWeWork from "@/components/sections/how-we-work";
import TechnicalHighlights from "@/components/sections/technical-highlights";
import TypicalProblems from "@/components/sections/typical-problems";
import OurPromise from "@/components/sections/our-promise";
import ProjectInquiry from "@/components/sections/project-inquiry";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			<Hero />
			<WhyPebsol />
			<Solutions />
			<HowWeWork />
			<TechnicalHighlights />
			<TypicalProblems />
			<OurPromise />
			<ProjectInquiry />
			<Testimonials />
		</div>
	);
}
