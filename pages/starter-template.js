import BreakText from "@/components/BreakText";
import Link from "next/link";

const StarterTemplate = () => {
    return (
        <div className="bg-red-400">
            <div
                className={`min-h-[10vh] max-h-[10vh]  backdrop-blur-lg grid md:grid-cols-2  2xl:text-2xl lg:text-xl text-base border-t  border-b duration-1000 delay-100`}
                id="works"
            >
                <h2 className="my-auto pl-10 md:block hidden">
                    Mir Fayek Hossain
                </h2>
                <div className="grid grid-cols-3 place-items-center border-l ">
                    <button>
                        <BreakText word="Home" />
                    </button>
                    {/* <button onClick={handleResume}> */}
                    <Link href="/mir-fayek-hossain-cv" target="_blanks">
                        <BreakText word="Resume" />
                    </Link>
                    {/* </button> */}
                    <button>
                        <BreakText word="Contacts" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 backdrop-blur-lg">
                <div className="min-h-[400px] w-full flex justify-center items-center">
                    <div>
                        <h2>Smooth Scroll on mousewheel</h2>

                        <p>Github:</p>
                        <p>Live Link:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarterTemplate;
