import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});
export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#f76e02",
                }}
                outerStyle={{
                    border: "3px solid #f76e02",
                }}
            />
            <Component {...pageProps} />
        </Provider>
    );
}
