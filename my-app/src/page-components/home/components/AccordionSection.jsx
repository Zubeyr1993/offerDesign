import { icons } from "@/components/icons";
import { useState } from "react";
import { Collapse } from "react-bootstrap";

const AccordionSection = () => {
	const [open, setOpen] = useState(0);
	return (
		<section className="accordion-section">
			<div className="container">
				<div className="accordion-container">
					{demoData.map((item, index) => (
						<div
							className={`accordion--item ${
								open === index ? "opened" : ""
							}`}
							key={index}
						>
							<Collapse in={open !== index}>
								<div>
									<button type="button" onClick={() => setOpen(index)}>
										{icons.circlePlus} <span>{item.title}</span>
									</button>
								</div>
							</Collapse>
							<Collapse in={open === index}>
								<div>
									<div
										className="content"
										style={{
											background: `url(${item.img}) no-repeat center center / cover`,
										}}
									>
										<h2 className="title">{item.title}</h2>
										<ul className="info-list">
											{item.list.map((listItem, index) => (
												<li key={index}>
													{icons.checkPrimary}{" "}
													<span>{listItem}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</Collapse>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const demoData = [
	{
		img: "/accordion/accordion-1.png",
		title: "Her får du",
		list: [
			"Dansk & Specialudviklet intelligens",
			"Høj produktion",
			"Vinteroptimeret anlæg",
			"Standardmontagen inkluderet",
			"Fremtidssikring",
		],
	},
	{
		img: "/accordion/accordion-1.png",
		title: "Solcelleløsning",
		list: [
			"Dansk & Specialudviklet intelligens",
			"Høj produktion",
			"Vinteroptimeret anlæg",
			"Standardmontagen inkluderet",
			"Fremtidssikring",
		],
	},
	{
		img: "/accordion/accordion-1.png",
		title: "Smart Sense",
		list: [
			"Dansk & Specialudviklet intelligens",
			"Høj produktion",
			"Vinteroptimeret anlæg",
			"Standardmontagen inkluderet",
			"Fremtidssikring",
		],
	},
	{
		img: "/accordion/accordion-1.png",
		title: "Egen Strøm",
		list: [
			"Dansk & Specialudviklet intelligens",
			"Høj produktion",
			"Vinteroptimeret anlæg",
			"Standardmontagen inkluderet",
			"Fremtidssikring",
		],
	},
	{
		img: "/accordion/accordion-1.png",
		title: "Besparelse",
		list: [
			"Dansk & Specialudviklet intelligens",
			"Høj produktion",
			"Vinteroptimeret anlæg",
			"Standardmontagen inkluderet",
			"Fremtidssikring",
		],
	},
];
export default AccordionSection;
