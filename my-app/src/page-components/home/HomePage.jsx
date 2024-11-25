"use client";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import AccordionSection from "./components/AccordionSection";
import Banner from "./components/Banner";
import Cta from "./components/Cta";
import KontantTab from "./components/KontantTab";
import Reviews from "./components/Reviews";
import Statistics from "./components/Statistics";
import StickyButton from "./components/StickyButton";
const HomePage = () => {
	return (
		<>
			<Layout>
				<Banner />
				<KontantTab />
				<AccordionSection />
				<Cta />
				<Reviews />
				<Statistics />
				<StickyButton />
				<Footer />
			</Layout>
		</>
	);
};

export default HomePage;
