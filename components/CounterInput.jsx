import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

function CounterInput() {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-10">
            <button onClick={() => dispatch(increment())} className="bg-green-400 px-5 py-2 text-xl">+</button>
            <button onClick={() => dispatch(decrement())} className="bg-red-400 px-5 py-2 text-xl">-</button>
        </div>
    );
}

export default CounterInput;
