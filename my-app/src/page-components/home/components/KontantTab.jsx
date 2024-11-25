import { icons } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
const KontantTab = () => {
	const [activeTab, setActiveTab] = useState("Finansiering");
	const [activatorStyle, setActivatorStyle] = useState({});
	const tabMenuRef = useRef();

	useEffect(() => {
		const activeButton = tabMenuRef.current.querySelector(".active");
		if (activeButton) {
			setActivatorStyle({
				width: `${activeButton.offsetWidth}px`,
				height: `${activeButton.offsetHeight}px`,
				left: `${activeButton.offsetLeft}px`,
			});
			activeButton.classList.remove("initial-active");
		}
	}, [activeTab]);

	return (
		<section className="kontant-tab-section">
			<div className="container">
				<div className="tab-menu" ref={tabMenuRef}>
					<span className="activator" style={activatorStyle}></span>
					<button
						className={`${activeTab === "Finansiering" ? "active" : ""} `}
						onClick={() => setActiveTab("Finansiering")}
						type="button"
					>
						Finansiering
					</button>
					<button
						className={activeTab === "Kontant" ? "active" : ""}
						onClick={() => setActiveTab("Kontant")}
						type="button"
					>
						Kontant
					</button>
				</div>
				<div className="tab--content mt-4">
					<div
						className={`tab--content-item bg-fafafa ${
							activeTab != "Finansiering" ? "inactive" : ""
						}`}
					>
						<div className="text-center">
							<h4 className="subtitle">Finansieringseksempel</h4>
							<span className="subtext">
								(inkl. moms uden udbetaling)
							</span>
							<div className="amount">
								<span>948</span>
								<small>kr./mdr</small>
							</div>
							<div className="sub-amount-wrap">
								<div className="sub-amount-wrap-item">
									<h5 className="sub-title">Månedlig besparelse</h5>
									<div className="sub-amount">
										<span>1.568</span>
										<small>kr.</small>
									</div>
								</div>
								<div className="sub-amount-wrap-item">
									<h5 className="sub-title">Månedligt overskud</h5>
									<div className="sub-amount">
										<span>582</span>
										<small>kr.</small>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`tab--content-item bg-fafafa ${
							activeTab != "Kontant" ? "inactive" : ""
						}`}
					>
						<div className="text-center">
							<h4 className="subtitle">Est. årlig baseparelse</h4>
							<span className="subtext">(med intelligent styring)</span>
							<div className="amount">
								<span>18.816</span>
								<small>kr./mdr</small>
							</div>
							<div className="sub-amount-wrap">
								<div className="sub-amount-wrap-item">
									<h5 className="sub-title">Kampagnepris</h5>
									<div className="sub-amount">
										<span>130.000</span>
										<small>kr.</small>
									</div>
								</div>
								<div className="sub-amount-wrap-item">
									<h5 className="sub-title">Kontantpris</h5>
									<div className="sub-amount">
										<span>110.000</span>
										<small>kr.</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tab-arrow-button">
				<button type="button">
					Lad os gennemgå jeres tilbud {icons.arrowDown}
				</button>
			</div>
		</section>
	);
};

export default KontantTab;
