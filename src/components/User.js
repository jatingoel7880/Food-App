import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello and welcome");
    }, 1000);

    console.log("UseEffect");
    //this return function is called when unmounting it
    //return will be called when the leave the page
    return () => {
      clearInterval(timer);
      console.log("UseEffect return");
    };
  }, []);
  console.log("render");

  // const User = ({name}) => { //destructing method, passing name in the about file in User Compoenent there and getting as a parameter here
  return (
    <div className="user-card">
      {/* <h2>Name: Jatin</h2> */}
      {/* and can access the name declared in about file as using the props by passing the props as an argument to the function  */}
      <h2>Name:{props.name}</h2>
      {/* <h2>Name:{name}</h2> */} {/* destructing method  */}
      <h3>Location: Lucknow</h3>
      <h4>Contact: 7880362153</h4>
      <h1>Count:{count}</h1>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default User;
