import { useEffect } from "react";

const Slider = ({ sliderOpen, handleSlider }) => {
    useEffect(() => {
        if (sliderOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [sliderOpen]);
    return (
        <div
            className={`fixed  h-screen w-screen z-[999] bg-red-400 ${
                sliderOpen ? "max-w-screen" : "max-w-0"
            } duration-1000 overflow-hidden backdrop-blur-xl`}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            earum, veniam fuga placeat unde eos. Eius ex sit quibusdam ipsum
            beatae quae similique earum facilis. Earum suscipit saepe aliquam
            id?
        </div>
    );
};

export default Slider;
