import BreakText from "@/components/BreakText";
import ExtendedImage from "@/components/ExtendedImage";
import Head from "@/components/Head";
// import SmoothScroll from "@/components/SmoothScroll";
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
    const [coffeeCreating, setCoffeeCreating] = useState(true);
    
    const windowHeight = windowSize?.height;
    const scrollHeight = windowHeight * 0.9;
    const ref = useRef(null);

    const enterFullscreen = () => {
      if (ref.current) {
        if (ref.current.requestFullscreen) {
          ref.current.requestFullscreen();
        } else if (ref.current.mozRequestFullScreen) {
          ref.current.mozRequestFullScreen();
        } else if (ref.current.webkitRequestFullscreen) {
          ref.current.webkitRequestFullscreen();
        } else if (ref.current.msRequestFullscreen) {
          ref.current.msRequestFullscreen();
        }
        setLoading(false)
      }
    }; const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
    const scrollTo90vh = () => {
        window.scrollTo(0, scrollHeight);
    };
    const [details, setdetails] = useState([
        {
            id: 0,
            name: "Codecony",
            thumb: "/static/projects/codecony.jpg",
            url: "https://codecony.com/",
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
            url: "http://178.128.215.73:3000",
            stacks: ["HTML5", "JQuery"],
            description: "",
        },
    ]);
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
        // Delayed function execution
        const timer = setTimeout(() => {
            setCoffeeCreating(false);
        }, 1000);
        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        window.scrollTo(0, 0);

        }
    }, [loading]);
    return (
        <div ref={ref} className="!overflow-y-auto !overflow-x-hidden">
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
            {loading && (
                <div className="fixed bg-gray-800 top-0 w-full h-full z-[199]">
                    <div className=" relative w-full h-full flex justify-center items-center ">
                        <ExtendedImage
                            src="/static/hero-bg.jpg"
                            className="-z-10"
                            priority
                        />
                        <div className="flex gap-4 items-end">
                  
                            {coffeeCreating?<div>
                                <h2>Turning</h2> <h2>Coffee</h2>{" "}
                                <div className="flex">
                                    <h2>into Code</h2>
                                    <div className="self-end bouncing-loader pb-1">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>:<div className="zoom cursor-pointer flex items-end gap-4" onClick={enterFullscreen}>
                            <div className="loader">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div className="cup">
                                    <span></span>
                                </div>
                            </div><div>
                                <h2>
                                It&apos;s Ready!
                                </h2>
                                <h2>Click ME !</h2></div></div>} 
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
                <div className="relative mt-[20vh] md:mt-0  w-[40vw] md:w-[30vh] aspect-square float-right rounded-full overflow-hidden">
                    <ExtendedImage priority={true} src="/me.png" />
                </div>
            </div>
            
            {/* <SmoothScroll> */}
            <div
                className={`w-full flex flex-col ${
                    loading && "opacity-0"
                } duration-1000 relative`}
            >
                <div className="w-full h-[90vh] relative ">
                    <div
                        className={`text-[10vw] mt-[20vh] md:mt-0 font-bold leading-tight md:px-0 px-5  ${
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
                        className={`absolute bottom-10 2xl:text-2xl lg:text-xl text-base right-0 md:w-[45vw] md:px-0 px-5  ${
                            loading && "opacity-0"
                        } duration-1000 delay-1000`}
                    >
                        
                        I’m Mir Fayek Hossain, a Web Developer and UI/UX
                        specialist who thrives in creating unique data-driven
                        design approaches. I have more than one year of
professional experience with several multinational companies.
                    </h2>
                </div>
                <div
                    className={`min-h-[10vh] sticky top-0 z-50 max-h-[10vh]  backdrop-blur-lg grid md:grid-cols-2  2xl:text-2xl lg:text-xl text-base border-t  border-b ${
                            loading ? "translate-y-[10vh]"
                            :"translate-y-0"
                        } duration-1000 delay-1000`}
                   
                >
                    <h2 className="my-auto pl-10 md:block hidden">
                        Mir Fayek Hossain
                    </h2>
                    <div className="grid grid-cols-3 place-items-center border-l ">
                        <a href="#works">
                            <BreakText word="Works" />
                        </a>
                        <Link href="/mir-fayek-hossain-cv" >
                            <BreakText word="Resume" />
                        </Link>
                        <a href="#contacts" >

                            <BreakText word="Contacts" />
                        </a>
                    </div>
                </div>
                <div  id="works" className="grid md:grid-cols-2 backdrop-blur-2xl overflow-hidden">
                    {details.map((data) => (
                        <Link
                            href={data.url}
                            key={data.id}
                            target="_blank"
                            className="relative w-full lg:h-[50vh] md:h-[30vw] h-[70vw] bg-black group overflow-hidden project"
                        >
                            <ExtendedImage
                            priority={true}
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
                    <div className="relative w-full  md:h-[25vw] h-[40vw] flex justify-center items-center px-10 group text-[4.2vw] leading-[1] uppercase">
                        <h2 className="w-fit text-justify ">
                            Don&apos;t be a stranger! Let&apos;s work Together,
                            <br />
                            <span className="bg-brand text-black">say hi!</span>
                        </h2>
                        {/* <h2 className="px-10 text-justify absolute -z-[100] opacity-0 group-hover:z-10 group-hover:opacity-100 duration-500">
                                
                                Please stay a stranger! Let&apos;s work
                                Separately,
                                <br />
                                <span className="bg-brand text-black">
                                    & No hellos
                                </span>
                            </h2> */}
                    </div>
                    <div className="  md:h-[25vw] h-[70vw]" id="contacts">
                        <ul className="flex flex-col h-full md:border-l parent">
                            {contactData.map((data) => (
                                <Link
                                    key={data.id}
                                    className="h-full border-b md:border-t-0 border-t"
                                    href={data.url}
                                >
                                    <li className="2xl:text-4xl lg:text-2xl text-base child w-full h-full flex items-center md:ml-10 ml-5 duration-500">
                                        <BreakText
                                            word={data.name}
                                            titleDetails={data?.description}
                                        />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* </SmoothScroll> */}
        </div>
    );
}
