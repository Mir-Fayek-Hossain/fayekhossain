import BreakText from "@/components/BreakText";
import ExtendedImage from "@/components/ExtendedImage";
import Head from "@/components/Head";
import ResumeModal from "@/components/ResumeModal";
import SmoothScroll from "@/components/SmoothScroll";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const windowSize = useWindowSize();
    const [resumeVisibility, setResumeVisibility] = useState(false);
    const [loading, setLoading] = useState(true);
    const fixedElementRef = useRef(null);

    const [details, setdetails] = useState([
        {
            id: 0,
            name: "Codecony",
            thumb: "/static/projects/codecony.jpg",
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
            thumb: "/static/projects/client-area.jpg",
            url: "https://ppp.bzmgraphics.com/",
            stacks: ["Laravel", "AlpineJS", "TailwindCSS"],
            description: "",
        },
        {
            id: 3,
            name: "bZm Graphics ltd",
            thumb: "/static/projects/bzm.jpg",
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
            thumb: "/static/projects/xalian.jpg",
            url: "https://xalian.vercel.app/",
            stacks: ["ReactJS", "TailwindCSS"],
            description: "",
        },
    ]);
    const windowHeight = windowSize?.height;
    const scrollHeight = windowHeight * 0.9;
    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position relative to the viewport height
            const scrollPosition =
                window.scrollY / (document.documentElement.clientHeight * 0.9);

            // Check if the scroll position is at or beyond 90vh
            if (scrollPosition >= 1) {
                // Fix the element at the top of the page
                fixedElementRef.current.style.position = "fixed";
                fixedElementRef.current.style.top = "0";
                fixedElementRef.current.style.zIndex = "100";
                fixedElementRef.current.style.opacity = "1";
            } else {
                // Unfix the element
                fixedElementRef.current.style.position = "relative";
                fixedElementRef.current.style.top = "auto";
                fixedElementRef.current.style.zIndex = "-100";
                fixedElementRef.current.style.opacity = "0"; // Resetting opacity to 1
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
    const scrollTo90vh = () => {
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
    useEffect(() => {
        // Delayed function execution
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [loading]);
    return (
        <>
            <Head title="Mir Fayek Hossain" ogTitle="Software Engineer" />
            {loading && (
                <div className="fixed top-0 w-full h-full z-[999]">
                    <div className="relative w-full h-full flex justify-center items-center ">
                        <ExtendedImage
                            src="/static/hero-bg.jpg"
                            className="-z-10"
                            priority
                        />
                        <div className="grid grid-cols-2">
                            <div className="loader">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div className="cup">
                                    <span></span>
                                </div>
                            </div>
                            <div className="place-self-end">
                                <h2>Turning</h2> <h2>Coffee</h2>{" "}
                                <h2>into Code</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                className={`fixed top-0 w-full h-full bg-cover bg-center  ${
                    loading && "opacity-0"
                } duration-500`}
                style={{ backgroundImage: 'url("/static/hero-bg.jpg")' }}
            >
                <div className="relative w-[30vh] aspect-square float-right rounded-full overflow-hidden">
                    <ExtendedImage src="/me.png" />
                </div>
            </div>
            <div
                className={`opacity-0 -z-[100] min-h-[10vh] max-h-[10vh] w-full backdrop-blur-lg grid md:grid-cols-2  2xl:text-2xl lg:text-xl text-base border-t  border-b duration-1000 delay-100`}
                ref={fixedElementRef}
            >
                <h2 className="my-auto pl-10 md:block hidden">
                    Mir Fayek Hossain
                </h2>
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
            <ResumeModal
                resumeVisibility={resumeVisibility}
                setResumeVisibility={setResumeVisibility}
            />
            <SmoothScroll>
                <div
                    className={`w-full flex flex-col ${
                        loading && "opacity-0"
                    } duration-1000`}
                >
                    <div className="w-full h-[90vh] relative ">
                        <div
                            className={`text-[10vw] font-bold leading-tight md:px-0 px-5  ${
                                loading
                                    ? "translate-x-[-50vw]"
                                    : "translate-x-[0vw]"
                            } duration-1000 delay-500`}
                        >
                            <h2 className="grd gradient-1">Mir</h2>
                            <h2 className="grd">Fayek</h2>
                            <h2 className="grd gradient-3">Hossin</h2>
                        </div>
                        <h2
                            className={`absolute bottom-10 2xl:text-2xl lg:text-xl text-base right-0 md:w-[40vw] md:px-0 px-5 ${
                                loading && "opacity-0"
                            } duration-700 delay-200`}
                        >
                            I’m Mir Fayek Hossain, a Front-end Developer and
                            UI/UX specialist who thrives in creating unique
                            data-driven design approaches.
                        </h2>
                    </div>
                    <div
                        className={`min-h-[10vh] max-h-[10vh]  backdrop-blur-lg grid md:grid-cols-2  2xl:text-2xl lg:text-xl text-base border-t  border-b ${
                            loading && "translate-y-[10vh] opacity-0"
                        } duration-1000 delay-100`}
                        id="works"
                    >
                        <h2 className="my-auto pl-10 md:block hidden">
                            Mir Fayek Hossain
                        </h2>
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
                    <div className="grid md:grid-cols-2 backdrop-blur-2xl overflow-hidden">
                        {details.map((data) => (
                            <Link
                                href={data.url}
                                key={data.id}
                                target="_blank"
                                className="relative w-full lg:h-[50vh] md:h-[30vw] h-[70vw] bg-black group overflow-hidden project"
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
                        <div className="relative w-full lg:h-[50vh] md:h-[30vw] h-[70vw] flex justify-center items-center px-10 group ld:text-[8vh] text-[4vw] leading-[1] uppercase">
                            <h2 className="w-fit text-justify ">
                                {/* LET’S MAKE SOMETHING TOGETHER, */}
                                Don&apos;t be a stranger! Let&apos;s work
                                Together,{" "}
                                <span className="bg-brand text-black">
                                    say hi!
                                </span>
                            </h2>
                        </div>
                        <div
                            className="  lg:h-[50vh] md:h-[30vw] h-[70vw]"
                            id="contacts"
                        >
                            <ul className="flex flex-col h-full md:border-l parent">
                                {contactData.map((data) => (
                                    <Link
                                        key={data.id}
                                        className="h-full border-b md:border-t-0 border-t"
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
