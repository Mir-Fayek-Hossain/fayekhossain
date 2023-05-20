import NextImage from "next/image";
import { memo, useState } from "react";
const ExtendedImage = ({ src, className, sizes, alt, ...rest }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <NextImage
            className={`object-cover pointer-events-none duration-200 ease-in ${className} ${
                isLoading ? " image-loader blur-md " : "grayscale-0 blur-0 "
            }`}
            src={src}
            sizes={sizes ? sizes : "(max-width: 768px) 50%, 33%"}
            alt={alt ? alt : "bZm Image"}
            fill
            {...rest}
            onLoadingComplete={() => setLoading(false)}
            draggable={false}
        />
    );
};
export default memo(ExtendedImage);
