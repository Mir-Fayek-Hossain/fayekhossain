import { useEffect } from "react";
import ExtendedImage from "./ExtendedImage";

const ResumeModal = ({ resumeVisibility, setResumeVisibility }) => {
    useEffect(() => {
        if (resumeVisibility) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [resumeVisibility]);
    return (
        <div
            className={`fixed h-full w-full z-[999] top-0 bg-red-400 transition-all duration-500 flex justify-center items-center ${
                resumeVisibility
                    ? "opacity-100 max-h-screen"
                    : "opacity-0  max-h-0"
            }`}
        >
            <div className="relative w-full h-[80vh] !aspect-square bg-green-400">
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
                {/* <ExtendedImage src="/static/cv/CV1.jpg" className="object- max-h-[80vh]" /> */}
            </div>
        </div>
    );
};

export default ResumeModal;
