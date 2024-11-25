import { statistics } from "@/components/icons";
const Statistics = () => {
	return (
		<section className="statistics-section">
			<div className="container">
				<div className="row gx-3 gy-4">
					{data.map((item, index) => (
						<div className="col-md-3 col-6" key={index}>
							<div className="statistics--item">
								<div className="icon">{item.icon}</div>
								<span>{item.text}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		icon: statistics.bulb,
		text: "25 års Ydelsesgaranti",
	},
	{
		icon: statistics.sunPlug,
		text: "Autoriserede Montører",
	},
	{
		icon: statistics.worldEnergy,
		text: "EU Godkendte Produkter",
	},
	{
		icon: statistics.flag,
		text: "Dansk lager Hurtig levering",
	},
];
export default Statistics;
