const User = (props) => {

  // const User = ({name}) => { //destructing method, passing name in the about file in User Compoenent there and getting as a parameter here
  return (
    <div className="user-card">
      {/* <h2>Name: Jatin</h2> */}
      {/* and can access the name declared in about file as using the props by passing the props as an argument to the function  */}
      <h2>Name:{props.name}</h2>
      {/* <h2>Name:{name}</h2> */} {/* destructing method  */}
      <h3>Location: Lucknow</h3>
      <h4>Contact: 7880362153</h4>
    </div>
  )
}

export default User;
