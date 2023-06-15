import Head from "@/components/Head";

const Resume = () => {
    return (
        <>
            <Head title="Mir Fayek Hossain" ogTitle="CV" />

            <iframe
                className="h-screen w-full"
                src="/Mir Fayek Hossain(CV).pdf"
                frameBorder="0"
            ></iframe>
        </>
    );
};

export default Resume;
