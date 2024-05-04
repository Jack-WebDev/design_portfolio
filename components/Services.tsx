import Image from "next/image";

export default function Services() {
	return (
		<div className="grid grid-cols-2 gap-4 mt-8 mx-4 md:grid-cols-4 lg:grid-cols-6">
			<div className="graphic_design bg-[#755CDE] col-span-2 rounded-xl p-4 relative grid gap-y-8 md:row-span-2">
				<Image
					src={"/pattern-graphic-design.svg"}
					alt=""
					width={100}
					height={100}
					className="relative top-0 right-[-9rem]"
				/>
				<h2 className="text-white font-semibold">Graphic Design</h2>
			</div>

			<div className="UI_UX bg-[#F6A560] rounded-xl relative p-4 grid gap-y-8">
				<Image
					src={"/pattern-ui-ux.svg"}
					alt=""
					width={50}
					height={50}
					className="relative top-0 right-[-3rem]"
				/>
				<h2 className="text-white font-semibold">UI/UX</h2>
			</div>

			<div className="apps bg-[#F39E9E] rounded-xl relative p-4 grid gap-y-8">
				<Image
					src={"/pattern-apps.svg"}
					alt=""
					width={50}
					height={50}
					className="relative top-0 right-[-3rem]"
				/>
				<h2 className="text-white font-semibold">Apps</h2>
			</div>

			<div className="illustrations bg-[#EB7565] col-span-2 rounded-xl  p-4 relative grid gap-y-8">
				<Image
					src={"/pattern-illustrations.svg"}
					alt=""
					width={100}
					height={100}
					className="relative top-0 right-[-9rem]"
				/>
				<h2 className="text-white font-semibold">Illustrations</h2>
			</div>

			<div className="photography bg-[#61C4B7] col-span-2 rounded-xl  p-4 relative grid gap-y-8">
				<Image
					src={"/pattern-photography.svg"}
					alt=""
					width={100}
					height={100}
					className="relative top-0 right-[-9rem]"
				/>
				<h2 className="text-white font-semibold">Photography</h2>
			</div>
			<div className="motion bg-[#552049] col-span-2 rounded-xl  p-4 relative grid gap-y-8">
				<Image
					src={"/pattern-motion-graphics.svg"}
					alt=""
					width={100}
					height={100}
					className="relative top-0 right-[-9rem]"
				/>
				<h2 className="text-white font-semibold">Motion Graphics</h2>
			</div>
		</div>
	);
}
