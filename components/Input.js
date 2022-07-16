import { useDispatch } from "react-redux";
import { inputActions } from "../store/inputState";
const Input = () => {
  const dispatch = useDispatch();
  const inputChange = (event) => {
    dispatch(inputActions.liveText(event.target.value));
  };
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          className=" bg-sky-200 bg rounded w-1/3 m-5 h-8"
          onChange={inputChange}
        />
        <button className="rounded bg-rose-700 my-5 p-1 h-8 text-rose-400">Search</button>
      </div>
    </>
  );
};

export default Input;
