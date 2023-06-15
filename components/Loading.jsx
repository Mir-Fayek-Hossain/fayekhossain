import ExtendedImage from "./ExtendedImage";

const Loading = () => {
    return (
        <div className="fixed top-0 w-full h-full z-[999]">
            <div className="relative w-full h-full flex justify-center items-center ">
                <div className="flex gap-4 items-end">
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
                    <div>
                        <h2>Turning</h2> <h2>Coffee</h2>{" "}
                        <div className="flex">
                            <h2>into Code</h2>
                            <div className="self-end bouncing-loader pb-1">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
