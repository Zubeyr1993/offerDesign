import Image from "next/image";
import { icons } from "./icons";

const Footer = () => {
	return (
		<footer>
			<div className="footer-top">
				<div className="container">
					<Image
						alt=""
						src="/footer-shape.svg"
						width={200}
						height={276}
						sizes="100vw"
						unoptimized
						className="footer-shape"
						style={{ width: "100px", height: "138px" }}
					/>
					<div className="footer-logo">
						<Image
							alt=""
							src="/offer/logo.png"
							width={200}
							height={41}
							sizes="100vw"
							unoptimized
							style={{ width: "auto", height: "41px" }}
						/>
					</div>
					<h4 className="subtitle">
						Grøn energi, gjort enkelt. Solée gør det muligt for alle at
						tage del i den bæredygtige fremtid.
					</h4>
					<div className="subtext">
						Vores solpaneler er lette at integrere, og vi sørger <br />{" "}
						for alt – fra første rådgivning til færdig installation.
					</div>
					<div className="footer-button-group">
						<button type="button" className="btn-1">
							<span>info@solee.dk</span>
							{icons.envelop}
						</button>
						<button type="button" className="btn-2">
							<span>+45 42 83 00 51</span>
							{icons.phone}
						</button>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<h5 className="subtitle">Solenergi. Enkel løsning. For alle.</h5>
					<div className="copyright">
						<span className="me-auto">&copy; 2024 Solée ApS</span>
						<a href="">Cookie & Privatlivspolitik</a>
						<a href="">Handelsbetingelser</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
