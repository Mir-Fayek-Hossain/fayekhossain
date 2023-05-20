import BreakText from "@/components/BreakText";
import ExtendedImage from "@/components/ExtendedImage";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [details, setdetails] = useState([
        {
            id: 0,
            name: "bZm Graphics ltd",
            thumb: "/static/projects/bzm.jpg",
            url: "",
            stacks: ["NextJS", "TailwindCSS"],
            description: "Production Level Project",
        },
        {
            id: 1,
            name: "Codecony",
            thumb: "/static/projects/codecony.png",
            url: "",
            stacks: ["NextJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 2,
            name: "Xalian",
            thumb: "/static/projects/xalian.png",
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
    const [hoverContacts, setHoverContacts] = useState("none");

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
                    <h2 className="text-[200px] font-bold leading-tight">
                        Software Engineer
                    </h2>
                    <h2 className="absolute bottom-10 text-2xl right-0 w-[40vw]">
                        I’m Mir Fayek Hossain, a Front-end Developer and UI/UX specialist who
                        thrives in creating unique data-driven design approaches
                    </h2>
                </div>
            </div>
            <SmoothScroll>
                <div className="pt-[90vh] w-full  flex flex-col">
                    <div className="min-h-[10vh] max-h-[10vh]  backdrop-blur-lg grid grid-cols-2 text-2xl border-t  border-b" id="works">
                        <h2 className="my-auto pl-10">Mir Fayek Hossain</h2>
                        <div className="grid grid-cols-3 place-items-center border-l ">
                            <Link href="#works">
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
                        <div className="relative w-full aspect-video flex justify-center items-center p-10">
                            <h2 className="text-8xl bg-gren-400 w-fit">
                                LET’S MAKE SOMETHING TOGETHER,<br />
                                <span className="bg-brand text-black">
                                    SAY HI!
                                </span>
                            </h2>
                        </div>
                        <div className="h-full" id="contacts">
                            <ul className="flex flex-col h-full border-l">
                                {contactData.map((data) => (
                                    <Link
                                        key={data.id}
                                        className="h-full border-b"
                                        href={data.url}
                                        onMouseEnter={() =>
                                            setHoverContacts(data.name)
                                        }
                                        onMouseLeave={() =>
                                            setHoverContacts("none")
                                        }
                                    >
                                        <li
                                            className={`text-4xl fancy w-full h-full flex items-center ml-10 
                                            ${
                                                hoverContacts == data.name ||
                                                (hoverContacts == "none"
                                                    ? "opacity-100"
                                                    : "opacity-30 blur-sm")
                                            } duration-500`}
                                        >
                                            {data.name
                                                .split("")
                                                .map((word, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="outer"
                                                    >
                                                        {word}
                                                    </span>
                                                ))}
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
