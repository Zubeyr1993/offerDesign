import Image from "next/image";

const Cta = () => {
	return (
		<div className="container d-md-none">
			<div className="cta-img">
				<Image
					src="/accordion/cta-bg.png"
					width={1000}
					height={1000}
					alt="cta"
				/>
			</div>
		</div>
	);
};

export default Cta;
