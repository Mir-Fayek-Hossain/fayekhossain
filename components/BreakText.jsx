const BreakText = ({ word }) => {
    return (
        // <span className="fancy">
        //     {word.split("").map((letter, idx) => (
        //         <span key={idx} className="outer">
        //             {letter}
        //         </span>
        //     ))}
        // </span>
        <h2 className="fancy flex items-center">
            {word.split("").map((letter, idx) => (
                <span key={idx} className="outer">
                    {letter}
                </span>
            ))}
        </h2>
    );
};

export default BreakText;
