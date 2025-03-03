"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Nav from "./Nav"
import Image from "next/image"

export default function BackgroundBeamsDemo() {
    return (
        <>

            <div className="min-h-[90vh] w-full rounded-md bg-neutral-950 dark:bg-neutral-900 relative flex items-center justify-center flex-col  antialiased">
                <Nav />
                <Image
                    src="/gg.png"
                    alt="coding"
                    width={500}
                    height={500}
                    className="hidden md:block object-cover absolute right-[0px] top-[100px]"
                />
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        <span className="text-yellow-500">Join</span> <span className="text-green-500">the</span> <span className="text-yellow-500">WTC</span><br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-green-500">Software Development Club</span>
                    </h1>
                    <p></p>
                    <p className="text-neutral-300 max-w-lg mx-auto my-2 text-md text-center relative z-10">
                        Learn web development with us. <br />
                        We offer Web Foundation, JavaScript Developer, and PHP Developer classes. <br />
                        Contact us to learn more!
                    </p>

                </div>
                <BackgroundBeams />
            </div>
        </>
    )
}

