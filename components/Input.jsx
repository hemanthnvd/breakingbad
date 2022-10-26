import { useDispatch } from "react-redux";
import { inputActions } from "../store/inputState";
const Input = () => {
  const dispatch = useDispatch();
  const inputChange = (event) => {
    dispatch(inputActions.liveText(event.target.value));
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder=" Type here"
          className=" rounded-full w-3/4 m-0 md:mx-3 h-6 md:h-8"
          onChange={inputChange}
        />
      </div>
    </>
  );
};

export default Input;
