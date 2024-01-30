import UserContext from "../utils/userContext";
import User from "./User";
// import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  // componentDidMount(){
  //    // console.log("Parent Component Did Mount");

  // }

  render() {
    //console.log("Parent render");

    return (
      <div>
        <h1> About Class Component</h1>
        <div>
          {/* Usage of Context Api in class based component */}
          LoogedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <h2> This is a Food Store. Welcome!</h2>
        <User name={" Jatin Goel"} />
        {/* <UserClass name={"1st Child (class based component props ex)"} location={"Lucknow-UP"}/> whatever props passed like this are combined into a single object */}
        {/* <UserClass name={"2nd Child"} location={"Lakhanpur-UP"}/>  */}
      </div>
    );
  }
}

export default About;
