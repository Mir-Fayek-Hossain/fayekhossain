import Link from "next/link";
import { useState } from "react";
import BreakText from "./BreakText";
import ExtendedImage from "./ExtendedImage";
import Slider from "./Slider";

const Body = ({ details, contactData }) => {
    const [sliderOpen, setSliderOpen] = useState(false);
    const handleSlider = () => {
        console.log("asd");
        setSliderOpen(!sliderOpen);
    };
    return (
        <>
            <Slider sliderOpen={sliderOpen} handleSlider={handleSlider} />
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
                <button
                    className=" border-b w-full minh-[200px] project"
                    onClick={handleSlider}
                >
                    <div className="flex w-full h-full justify-center items-center">
                        <h2 className="2xl:text-2xl lg:text-xl text-base underline-animation after:bg-white after:duration-500">
                            Valuable Starter Template Projects;
                        </h2>
                    </div>
                </button>
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
                                target="_blank"
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
        </>
    );
};

export default Body;
