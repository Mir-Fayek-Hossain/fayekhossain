import BreakText from "@/components/BreakText";
import ExtendedImage from "@/components/ExtendedImage";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [details, setdetails] = useState([
        {
            id: 0,
            name: "Codecony",
            thumb: "/static/projects/codecony.png",
            url: "",
            stacks: ["NextJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 1,
            name: "bZm Graphics ltd",
            thumb: "/static/projects/bzm.jpg",
            url: "",
            stacks: ["NextJS", "TailwindCSS"],
            description: "Production Level Project",
        },
        {
            id: 2,
            name: "Xalian",
            thumb: "/static/projects/xalian.PNG",
            url: "",
            stacks: ["ReactJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 3,
            name: "Photo Production Process",
            thumb: "/static/projects/client-area.PNG",
            url: "",
            stacks: ["Laravel", "AlpineJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 4,
            name: "Netflix",
            thumb: "/static/bg-2.jpeg",
            url: "",
            stacks: ["NextJS", "TailwindCSS"],
            description: "",
        },
    ]);

    const [contactData, setContactData] = useState([
        {
            id: 0,
            name: "LinkedIn",
            url: "#",
        },
        {
            id: 1,
            name: "Facebook",
            url: "#",
        },
        {
            id: 2,
            name: "Instagram",
            url: "#",
        },
        {
            id: 3,
            name: "Email",
            url: "#",
        },
        {
            id: 4,
            name: "Github",
            url: "#",
        },
    ]);
    return (
        <>
            <div
                className="fixed top-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("/static/hero-bg.jpg")' }}
            >
                <div className="w-[90vw] relative h-[90vh]">
                    <motion.h2
                        className="text-[200px] font-bold leading-tight"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -700 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        Software Engineer
                    </motion.h2>
                    <motion.h2
                        className="absolute bottom-10 text-2xl right-0 w-[40vw]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        I’m Mir Fayek Hossain, a Front-end Developer and UI/UX
                        specialist who thrives in creating unique data-driven
                        design approaches
                    </motion.h2>
                </div>
            </div>
            <SmoothScroll>
                
                <div className="w-full pt-[90vh] flex flex-col">
                    
                    <div
                        className="min-h-[10vh] max-h-[10vh]  backdrop-blur-lg grid grid-cols-2 text-2xl border-t  border-b"
                        id="works"
                    >
                        <h2 className="my-auto pl-10">Mir Fayek Hossain</h2>
                        <div className="grid grid-cols-3 place-items-center border-l ">
                            <Link href="/contact">
                                <BreakText word="Works" />
                            </Link>
                            <Link href="a">
                                <BreakText word="Resume" />
                            </Link>
                            <Link href="#contacts">
                                <BreakText word="Contacts" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 backdrop-blur-2xl overflow-x-hidden">
                        {details.map((data) => (
                            <Link
                                href={data.url}
                                key={data.id}
                                className="relative w-full aspect-[4/2] bg-black group overflow-hidden project"
                            >
                                <ExtendedImage
                                    src={data.thumb}
                                    className="group-hover:opacity-25 group-hover:scale-110 duration-[.6s] opacity-75"
                                />
                                <div className="absolute left-10 bottom-10   group-hover:opacity-100 opacity-0 duration-700 space-y-3">
                                    <h2 className="font-bold text-4xl underline-animation after:duration-500 w-fit">
                                        {data.name}
                                    </h2>
                                    <p className="text-2xl underline-animation after:duration-500 w-fit">
                                        {data.stacks.map((stack, idx) => (
                                            <span key={idx}>
                                                {stack}
                                                {idx + 1 !=
                                                    data.stacks.length && ", "}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="underline-animation after:duration-500 w-fit">
                                        {data?.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                        <div></div>
                        <div className="relative w-full aspect-video flex justify-center items-center px-10 group text-8xl uppercase h-full">
                            <h2 className="w-fit text-justify ">
                                {/* LET’S MAKE SOMETHING TOGETHER, */}
                                Don&apos;t be a stranger! Let&apos;s work Together,{" "}
                                <span className="bg-brand text-black">
                                    say hi!
                                </span>
                            </h2>
                        </div>
                        <div className="h-full" id="contacts">
                            <ul className="flex flex-col h-full border-l parent">
                                {contactData.map((data) => (
                                    <Link
                                        key={data.id}
                                        className="h-full border-b"
                                        href={data.url}
                                    >
                                        <li className="text-4xl child w-full h-full flex items-center ml-10 duration-500">
                                            <BreakText word={data.name} />
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </SmoothScroll>
        </>
    );
}
