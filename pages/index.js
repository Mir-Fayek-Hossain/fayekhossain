import BreakText from "@/components/BreakText";
import ExtendedImage from "@/components/ExtendedImage";
import ResumeModal from "@/components/ResumeModal";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [resumeVisibility, setResumeVisibility] = useState(false);
    const [details, setdetails] = useState([
        {
            id: 0,
            name: "Codecony",
            thumb: "/static/projects/codecony.png",
            url: "https://codecony.vercel.app",
            stacks: ["NextJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 1,
            name: "LOOX",
            thumb: "/static/projects/loox.png",
            url: "https://loox.com.bd/",
            stacks: ["Sveeltekit", "TailwindCSS"],
            description: "",
        },
        {
            id: 2,
            name: "Photo Production Process",
            thumb: "/static/projects/client-area.PNG",
            url: "https://ppp.bzmgraphics.com/",
            stacks: ["Laravel", "AlpineJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 3,
            name: "bZm Graphics ltd",
            thumb: "/static/projects/bzmm.png",
            url: "http://bzmgraphics.com",
            stacks: ["NextJS", "TailwindCSS"],
            description: "Production Level Project",
        },

        {
            id: 4,
            name: "Notely",
            thumb: "/static/projects/notely.jpg",
            url: "https://notely.art",
            stacks: ["HTML5", "JQuery"],
            description: "",
        },
        {
            id: 5,
            name: "Netflix Clone",
            thumb: "/static/projects/netflix.png",
            url: "#",
            stacks: ["NextJS", "TailwindCSS"],
            description: "",
        },

        {
            id: 6,
            name: "Xalian",
            thumb: "/static/projects/xalian.PNG",
            url: "https://xalian.vercel.app/",
            stacks: ["ReactJS", "TailwindCSS"],
            description: "",
        },
    ]);
    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
    const scrollTo90vh = () => {
        const windowHeight = window.innerHeight;
        const scrollHeight = windowHeight * 0.9;
        window.scrollTo(0, scrollHeight);
    };
    const handleResume = () => {
        setResumeVisibility(!resumeVisibility);
    };
    const [contactData, setContactData] = useState([
        {
            id: 0,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mir-fayek-hossain-49920a233/",
        },
        {
            id: 1,
            name: "Facebook",
            url: "https://www.facebook.com/fayek.hossain.5/",
        },
        {
            id: 2,
            name: "Instagram",
            url: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Ffayekhossain%3Ffbclid%3DIwAR1Kb7iPUTfzF5sKcAhK1YOj3BFKF9QEI7wB3ctduULCC9ZIpYZ8_ZI-JVA&h=AT3ZElxc9shHFBFmMX8qVZjl020sgty3CnyRNrWNVpAmIjME4atl07JSWFXsFIKJaDaE5zdP4YESzsOKG2iUgIOACZ26VHyq_dqrt4BvGPzTzD5tnBi1NWPqP8NrIMpK1ObF",
        },
        {
            id: 3,
            name: "Email",
            url: "mailto:mirfayekhossain@gmail.com",
        },
        {
            id: 4,
            name: "Github",
            url: "https://github.com/Mir-Fayek-Hossain",
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
                        className="2xl:text-[200px] lg:text-[140px] text-[90px] font-bold leading-tight"
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
                        className="absolute bottom-10 2xl:text-2xl lg:text-xl text-base right-0 w-[40vw]"
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
                        design approaches.
                    </motion.h2>
                </div>
            </div>
            <ResumeModal
                resumeVisibility={resumeVisibility}
                setResumeVisibility={setResumeVisibility}
            />
            <SmoothScroll>
                <div className="w-full pt-[90vh] flex flex-col">
                    <div
                        className="min-h-[10vh] max-h-[10vh]  backdrop-blur-lg grid grid-cols-2  2xl:text-2xl lg:text-xl text-base border-t  border-b"
                        id="works"
                    >
                        <h2 className="my-auto pl-10">Mir Fayek Hossain</h2>
                        <div className="grid grid-cols-3 place-items-center border-l ">
                            <button onClick={scrollTo90vh}>
                                <BreakText word="Works" />
                            </button>
                            <button onClick={handleResume}>
                                <BreakText word="Resume" />
                            </button>
                            <button onClick={scrollToBottom}>
                                <BreakText word="Contacts" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 backdrop-blur-2xl overflow-x-hidden">
                        {details.map((data) => (
                            <Link
                                href={data.url}
                                key={data.id}
                                className="relative w-full h-[50vh] bg-black group overflow-hidden project"
                            >
                                <ExtendedImage
                                    src={data.thumb}
                                    className="group-hover:opacity-25 group-hover:scale-110 duration-[.6s] opacity-75"
                                />
                                <div className="absolute 2xl:left-10 left-5 2xl:bottom-10 bottom-5 group-hover:opacity-100 lg:opacity-0 duration-700 space-y-3">
                                    <h2 className="font-bold  2xl:text-4xl lg:text-2xl text-base underline-animation after:bg-white after:duration-500 w-fit">
                                        {data.name}
                                    </h2>
                                    {/* <p className=" 2xl:text-2xl text-xl underline-animation after:duration-500 w-fit">
                                        {data.stacks.map((stack, idx) => (
                                            <span key={idx}>
                                                {stack}
                                                {idx + 1 !=
                                                    data.stacks.length && ", "}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="underline-animation after:duration-500 w-fit  2xl:text-base text-sm">
                                        {data?.description}
                                    </p> */}
                                </div>
                            </Link>
                        ))}
                        <div></div>
                        <div className="relative w-full h-[50vh] flex justify-center items-center px-10 group 2xl:text-8xl lg:text-[55px] text-[36px] leading-[1] uppercase">
                            <h2 className="w-fit text-justify ">
                                {/* LET’S MAKE SOMETHING TOGETHER, */}
                                Don&apos;t be a stranger! Let&apos;s work
                                Together,{" "}
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
                                        <li className="2xl:text-4xl lg:text-2xl text-base child w-full h-full flex items-center ml-10 duration-500">
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