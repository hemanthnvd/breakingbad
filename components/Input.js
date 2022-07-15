const Input = () => {
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          className=" bg-sky-200 bg rounded w-1/3 m-5 h-8"
        />
        <button className="rounded bg-rose-700 my-5 p-1 h-8 text-rose-400">Search</button>
      </div>
    </>
  );
};

export default Input;
