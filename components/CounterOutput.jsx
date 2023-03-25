import { useSelector } from "react-redux";

const CounterOutput = () => {
    const count = useSelector((state) => state.counter.value);

    return (
        <div className="w-full text-center text-2xl p-4">
            <h1>Count: {count}</h1>
        </div>
    );
};

export default CounterOutput;
