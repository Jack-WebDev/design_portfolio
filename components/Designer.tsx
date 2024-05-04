import Image from "next/image";
import { Button } from "./ui/button";

export default function Designer() {
  return (
    <div className="grid justify-items-center items-center gap-y-8 text-center mt-8 mx-4 md:grid-cols-2 md:text-start md:justify-items-start md:gap-y-0 md:mt-20">
        <div className="avatar md:row-span-3">
            <Image src={"/image-amy.webp"} alt="" width={500} height={500} className="md:translate-x-[-7rem] lg:translate-x-0"/>
        </div>

        <>
        <h2 className="text-3xl font-semibold">I'm Amy, and I'd love to work on your next project</h2>
        <p>I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>

        <Button variant={"default"} className="rounded-2xl py-4 px-8 bg-[#EB7565] text-white hover:text-[#EB7565] hover:border hover:border-[#EB7565]">Free Consultation</Button>
      
        </>

    </div>
  )
}
