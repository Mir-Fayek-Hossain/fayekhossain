import { useEffect, useState } from "react";
import ExtendedImage from "./ExtendedImage";

const ResumeModal = ({ resumeVisibility, setResumeVisibility }) => {
    useEffect(() => {
        if (resumeVisibility) {
            document.body.style.overflow = "hidden";
        } else {
            setCvPage(1);
            document.body.style.overflow = "unset";
        }
    }, [resumeVisibility]);
    const [cvPage, setCvPage] = useState(1);

    const handlechange = () => {
        if (cvPage == 1) {
            setCvPage(2);
        } else {
            setCvPage(1);
        }
    };
    return (
        <div
            className={`fixed h-full w-full z-[999] top-0  transition-all duration-500 flex justify-center items-center ${
                resumeVisibility
                    ? "opacity-100 max-h-screen z-[999]"
                    : "opacity-0  max-h-0 -z-[99]"
            }`}
        >
            <div className="absolute z-[999] p-4 right-0 top-0">
                <button
                    className="rounded-full  p-1 group border-2 border-slate-600"
                    onClick={() => {
                        setResumeVisibility(false);
                    }}
                >
                    <p className="2xl:w-10 w-8  group-hover:rotate-180 transition-all duration-300 border-slate-600">
                        X
                    </p>
                </button>
            </div>
            <a
                href="/Mir Fayek Hossain(CV).pdf"
                download="cv"
                className="absolute top-[1vh] bg-brand text-black"
            >
                Download CV
            </a>
            <div className="w-full flex justify-center items-center gap-6">
                <button onClick={handlechange} className="text-4xl h-fit">
                    {"<"}
                </button>

                <div className="relative h-[90vh] aspect-[8.2/10.7] bg-brand">
                    <ExtendedImage
                        src="/static/cv/CV1.jpg"
                        className={`object-contain ${
                            cvPage == 1 ? "opacity-100 " : "opacity-0"
                        }`}
                    />
                    <ExtendedImage
                        src="/static/cv/CV2.jpg"
                        className={`object-contain ${
                            cvPage == 2 ? "opacity-100 " : "opacity-0"
                        }`}
                    />
                </div>
                <button onClick={handlechange} className="text-4xl h-fit">
                    {">"}
                </button>
            </div>
            <div
                className="bg-center bg-cover absolute w-full h-full  -z-[1]  blur-md scale-110"
                style={{ backgroundImage: 'url("/static/hero-bg.jpg")' }}
            ></div>
        </div>
    );
};

export default ResumeModal;
