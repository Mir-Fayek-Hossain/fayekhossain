import NextHead from "next/head";
import { useRouter } from "next/router";
import { memo } from "react";

const Head = ({ children, title, ogTitle }) => {
    const router = useRouter();
    const description =
        " I’m Mir Fayek Hossain, a Front-end Developer and UI/UX specialist who thrives in creating unique data-driven design approaches.";
    let pageTitle = `${title} |  ${ogTitle}`;
    return (
        <NextHead>
            <meta key="charSet" charSet="UTF-8" />
            <meta name="robots" content="follow, index" />
            <meta
                key="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                key="httpEquiv"
                httpEquiv="x-ua-compatible"
                content="ie=edge"
            />
            <meta key="title" name="title" content={ogTitle} />

            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}`} />
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}`} />

            <meta key="description" name="description" content={description} />

            <meta key="author" name="author" content={ogTitle} />

            <meta key="og:title" property="og:title" content={ogTitle} />
            <meta
                key="og:description"
                property="og:description"
                content={description}
            />
            <meta key="og:type" property="og:type" content="website" />
            {/* facebook */}
            <meta
                property="og:url"
                content={`${process.env.NEXT_PUBLIC_APP_URL}`}
            />
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}`} />
            <meta
                key="og:image"
                property="og:image"
                content="/static/ogimage.jpg"
            />
            <meta key="image" property="image" content="/static/ogimage.jpg" />
            <meta
                key="og:image:width"
                property="og:image:width"
                content="1200"
            />
            <meta
                key="og:image:height"
                property="og:image:height"
                content="630"
            />
            {/* twitter */}

            <meta
                key="twitter:card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta key="twitter:title" name="twitter:title" content={ogTitle} />
            <meta
                key="twitter:creator"
                name="twitter:creator"
                content="@fayekhossain"
            />
            <meta
                key="twitter:description"
                name="twitter:description"
                content={description}
            />
            <meta
                key="twitter:image"
                name="twitter:image"
                content="/static/ogimage.jpg"
            />
            <meta property="twitter:image" content="/static/ogimage.jpg" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
             <link href="https://fonts.googleapis.com/css2?family=Goblin+One&display=swap" rel="stylesheet"/>
            <link
                key="icon32"
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon.png"
            />
            <meta
                key="msapplication-TileColor"
                name="msapplication-TileColor"
                content="#1ab9d4"
            />
            <meta key="theme-color" name="theme-color" content="#00000" />
            <title key="pageTitle">{pageTitle}</title>
            {children}
        </NextHead>
    );
};

export default memo(Head);
