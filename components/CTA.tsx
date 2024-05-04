import { Button } from "./ui/button";

export default function CTA() {
	return (
		<div className="grid gap-y-4 bg-black text-center py-8 px-4 mt-12 mx-4 rounded-xl">
			<h3 className="text-2xl text-white">Book a call with me</h3>
			<p className="text-white md:w-[50ch] md:mx-auto">
				I'd love to have a chat to see how I can help you. The best first step
				is for us to discuss your project during a free consultation. Then we
				can move forward from there.
			</p>
            <Button variant={"default"} className="rounded-2xl py-4 px-8 bg-[#EB7565] text-white hover:text-white hover:border hover:border-white md:justify-self-center md:mt-4">Free Consultation</Button>

		</div>
	);
}
