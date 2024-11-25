import Image from "next/image";
import React from "react";

const Navbar = () => {
	const [scroll, setScroll] = React.useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`main-navbar ${scroll > 10 ? "active" : ""}`}>
			<div className="container">
				<div className="d-flex align-items-center justify-content-between">
					<Image
						alt=""
						src="/offer/logo.png"
						width={0}
						height={0}
						sizes="100vw"
						unoptimized
						style={{ width: "auto", height: "41px" }}
					/>
					{scroll > 10 && (
						<button type="button" className="help-btn">
							Hjælp?
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
