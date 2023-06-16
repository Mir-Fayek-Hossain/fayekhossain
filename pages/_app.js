import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ExtendedImage from "@/components/ExtendedImage";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <div
                className={`fixed top-0 w-full h-full bg-cover bg-center   duration-500`}
            >
                <ExtendedImage
                    src="/static/hero-bg.jpg"
                    className="-z-10"
                    priority
                />
            </div>
            <Component {...pageProps} />
        </Provider>
    );
}
