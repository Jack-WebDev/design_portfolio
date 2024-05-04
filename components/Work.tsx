import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const images = [
	"/image-slide-1.jpg",
	"/image-slide-2.jpg",
	"/image-slide-3.jpg",
	"/image-slide-4.jpg",
	"/image-slide-5.jpg",
];

export default function Work() {
	return (
		<div className="grid justify-items-center items-center mt-12">
			<h2 className="font-medium text-2xl">My Work</h2>
			<Carousel className="w-full max-w-xs">
				<CarouselContent className="lg:justify-center">
					{images.map((image, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center mx-4 lg:justify-center">
										<Image src={image} alt="" width={300} height={300} />
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="translate-x-20 bg-black text-white md:w-12 md:h-12" />
				<CarouselNext className="translate-x-40 bg-black text-white md:w-12 md:h-12" />
			</Carousel>
		</div>
	);
}
