import Body from "@/components/Body";
import BreakText from "@/components/BreakText";
import ExtendedImage from "@/components/ExtendedImage";
import Head from "@/components/Head";
import Loading from "@/components/Loading";
import SmoothScroll from "@/components/SmoothScroll";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});
export default function Home() {
    const windowSize = useWindowSize();
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
        // {
        //     id: 5,
        //     name: "Netflix Clone",
        //     thumb: "/static/projects/netflix.png",
        //     url: "#",
        //     stacks: ["NextJS", "TailwindCSS"],
        //     description: "",
        // },

        // {
        //     id: 6,
        //     name: "Xalian",
        //     thumb: "/static/projects/xalian.jpg",
        //     url: "https://xalian.vercel.app/",
        //     stacks: ["ReactJS", "TailwindCSS"],
        //     description: "",
        // },
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
    const [contactData, setContactData] = useState([
        {
            id: 0,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mir-fayek-hossain-49920a233/",
            description: "Serious Me",
        },
        {
            id: 1,
            name: "Facebook",
            url: "https://www.facebook.com/fayek.hossain.5/",
            description: "Doodler Model",
        },
        {
            id: 2,
            name: "Email",
            url: "mailto:mirfayekhossain@gmail.com",
            description: "100% chance i read it",
        },
        {
            id: 3,
            name: "Github",
            url: "https://github.com/Mir-Fayek-Hossain",
            description: "My Personal Jurasic World",
        },
        {
            id: 4,
            name: "Instagram",
            url: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Ffayekhossain%3Ffbclid%3DIwAR1Kb7iPUTfzF5sKcAhK1YOj3BFKF9QEI7wB3ctduULCC9ZIpYZ8_ZI-JVA&h=AT3ZElxc9shHFBFmMX8qVZjl020sgty3CnyRNrWNVpAmIjME4atl07JSWFXsFIKJaDaE5zdP4YESzsOKG2iUgIOACZ26VHyq_dqrt4BvGPzTzD5tnBi1NWPqP8NrIMpK1ObF",
            description: "Aristic-Me",
        },
    ]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
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
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#f76e02",
                }}
                outerStyle={{
                    border: "3px solid #f76e02",
                }}
            />
            {loading && <Loading />}

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
                    <Link href="/mir-fayek-hossain-cv" target="_blanks">
                        <BreakText word="Resume" />
                    </Link>
                    <button onClick={scrollToBottom}>
                        <BreakText word="Contacts" />
                    </button>
                </div>
            </div>
            <SmoothScroll>
                <div
                    className={`w-full flex flex-col ${
                        loading && "opacity-0"
                    } duration-1000`}
                >
                    <div className="w-full h-[90vh] relative md:text-left text-center">
                        <div
                            className={`text-[10vw] font-bold leading-tight md:px-0 px-5 md:mt-[0] mt-[35vh] ${
                                loading
                                    ? "translate-x-[-50vw]"
                                    : "translate-x-[0vw]"
                            } duration-1000 delay-500`}
                        >
                            <h2 className="grd gradient-1">Mir</h2>
                            <h2 className="grd">Fayek</h2>
                            <h2 className="grd gradient-3">Hossin</h2>
                        </div>

                        <ExtendedImage
                            src="/me.png"
                            className=" max-w-[30vh] max-h-[30vh] rounded-full md:ml-auto md:mx-0 mx-auto"
                        />

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
                            {/* <button onClick={handleResume}> */}
                            <Link href="/mir-fayek-hossain-cv" target="_blanks">
                                <BreakText word="Resume" />
                            </Link>
                            {/* </button> */}
                            <button onClick={scrollToBottom}>
                                <BreakText word="Contacts" />
                            </button>
                        </div>
                    </div>
                    <Body details={details} contactData={contactData} />
                </div>
            </SmoothScroll>
        </>
    );
}
