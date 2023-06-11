const BreakText = ({ word, titleDetails }) => {
    return (
        // <span className="fancy">
        //     {word.split("").map((letter, idx) => (
        //         <span key={idx} className="outer">
        //             {letter}
        //         </span>
        //     ))}
        // </span>
        <h2 className="fancy w-full h-full relative flex items-center">
            {word.split("").map((letter, idx) => (
                <span key={idx} className="outer">
                    {letter}
                </span>
            ))}

            {titleDetails && (
                <div
                    className="-z-10 w-full h-full title-details  overflow-hidden absolute top-1/2 pr-[5vw] transform -translate-y-1/2 duration-500 flex items-center justify-end
"
                >
                    <p className="font-extralight 2xl:text-xl lg:text-base text-xs">{titleDetails}</p>
                </div>
            )}
        </h2>
    );
};

export default BreakText;
