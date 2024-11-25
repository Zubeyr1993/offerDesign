import { icons } from "@/components/icons";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
const Reviews = () => {
	const ref = useRef();

	useEffect(() => {
		if (ref.current) {
			ref.current.slideNext();
		}
	}, []);

	return (
		<section className="reviews-section">
			<div className="container">
				<h2 className="title">
					Tusindevis af boligejere kan ikke tage fejl
				</h2>
				<Image
					alt=""
					src="/trustpilot.svg"
					width={202}
					height={20}
					sizes="100vw"
					unoptimized
					className="trustpilot-logo"
				/>
				<div className="px-3">
					<Swiper
						slidesPerView="auto"
						spaceBetween={20}
						onSwiper={(swiper) => (ref.current = swiper)}
					>
						{data.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="reviews-item">
									<Image
										src={"/reviews/panel-roof.svg"}
										width={80}
										height={57}
										alt=""
										className="panel-roof"
									/>
									<div className="img">
										<Image
											src={item.img}
											width={330}
											height={250}
											alt=""
										/>
									</div>
									<div className="content">
										<blockquote className="quote">
											{icons.quote} <br />
											<div
												className="mt-3"
												dangerouslySetInnerHTML={{
													__html: item.quote,
												}}
											></div>
										</blockquote>
										<div className="name">{item.name}</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
const data = [
	{
		img: "/reviews/3.png",
		quote: "Forløbet med Solée har været smertefrit og vi er meget glade for vores solpaneler.",
		name: "Keld Rasmussen, Svendborg",
	},
	{
		img: "/reviews/1.png",
		quote: "Vi kan mærke <br /> besparelserne i <br /> dagligdagen",
		name: "Lis og Per Andersen, Amager",
	},
	{
		img: "/reviews/2.png",
		quote: "Familien er meget tilfreds med løsningen fra Solée.",
		name: "Anders Mikkelsen, Solrød",
	},
	{
		img: "/reviews/3.png",
		quote: "Forløbet med Solée har været smertefrit og vi er meget glade for vores solpaneler.",
		name: "Keld Rasmussen, Svendborg",
	},
	{
		img: "/reviews/1.png",
		quote: "Vi kan mærke <br /> besparelserne i <br /> dagligdagen",
		name: "Lis og Per Andersen, Amager",
	},
	{
		img: "/reviews/2.png",
		quote: "Familien er meget tilfreds med løsningen fra Solée.",
		name: "Anders Mikkelsen, Solrød",
	},
];
export default Reviews;
