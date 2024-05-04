import Image from "next/image";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <header className="flex justify-between items-center mt-16 mb-12 mx-4">
      <div className="logo">
        <Image src={"/logo.svg"} alt="" width={40} height={40}/>
      </div>

      <Button variant={"default"} className="text-white bg-black rounded-3xl py-4 px-8 hover:text-black hover:border hover:border-black">Free Consultation</Button>
    </header>
  )
}
