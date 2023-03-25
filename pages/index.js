import CounterInput from "@/components/CounterInput";
import CounterOutput from "@/components/CounterOutput";
import { Inter } from "next/font/google";

export default function Home() {
    return (
        <>
            <div className="h-screen">
                <h2 className="text-2xl mt-8 ml-8">
                    NextJS - Redux Toolkit - Javascript - Tailwind - Eslint{" "}
                </h2>
                <main className="h-full flex justify-center place-items-center">
                    <div>
                        <CounterOutput />
                        <CounterInput />
                    </div>
                </main>
            </div>
        </>
    );
}
