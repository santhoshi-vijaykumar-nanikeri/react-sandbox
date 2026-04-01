import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../slices/counter";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter:{count.value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
};

export default ReduxCounter;
