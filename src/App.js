import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, increseBy } from "./redux/slice/counterSlice";
import { useEffect } from "react";
import { fetchData } from "./redux/slice/asyncSlice";

function App() {
  const counter = useSelector((state) => state.Counter.value); // READ ONLY
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(fetchData("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789962/React%20Class/P.%20Akhila/toprates_cwkeuy.json"))
  },[])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>----</button>
      {counter}
      <button onClick={() => dispatch(increment())}>++++</button>
      <button onClick={() => dispatch(increseBy(10))}>+10</button>
    </div>
  );
}

export default App;
