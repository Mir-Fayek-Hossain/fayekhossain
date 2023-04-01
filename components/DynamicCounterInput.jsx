import { useDispatch } from "react-redux";
import { dynamicDecrement, dynamicIncrement } from "../redux/counterSlice";

function DynamicCounterInput() {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-10 mt-3">
            <button onClick={() => dispatch(dynamicIncrement(5))} className="bg-green-400 px-5 py-2 text-xl w-[70px]">+5</button>
            <button onClick={() => dispatch(dynamicDecrement(5))} className="bg-red-400 px-5 py-2 text-xl w-[70px]">-5</button>
        </div>
    );
}

export default DynamicCounterInput;
