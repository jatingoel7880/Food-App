import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        //local state variable with some dummy data
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name+"Child Component Did Mount");

    //API CALL
    // const data= await fetch(" https://api.github.com/users/jatingoel7880");
    // const json= await data.json(); //await will return a promise

    //console.log(json);

    // //now how to update the json data on to your webpage? :- by creating a local state variable and update that state and get the data on webpage
    // //create the state variable in this.state
    // // now update the state variable after getting the data inside the api call
    // this.setState({
    //     userInfo: json,
    //     //updated the state variable with the api data and update the component
    // });
    // console.log(json);

    this.timer = setInterval(() => {
      console.log("Hello and welcome");
    }, 1000);
    console.log(this.props.name + "Componet Did Mount");

    //in this part the "Hello and welcome" output is printing on the console after every second. The issue with the single page application is that if navigate to the other page then also printing the output.
    //if go back to that page then it will start calling twice(means started two intervals). b/c it is not reloading the pages it is just changing the components (just rendering or react is reconciling). Power of Single page application but it is a bad issue.
    //Performance issue but this.
    //so here comes component Will Unmount to unmount or clear the interval.
    //need to refer the setInterval in component Will Unmount by using this keyword.  (this keyword is shared b/w all the functions of this class )
  }

  //similar to the useEffect in the functional component
  // componentDidUpdate(pervProps, prevState){
  //     if(this.state.count !== prevState.count){
  //             //basically here it checks if the prev count is equal to the latest count then do component Did Update
  //     }

  //     //code
  //     console.log("Component Did Update")
  // }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    //USse case of componentWillUnmount
    clearTimeout(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h4>Contact: 7880362153</h4>
      </div>
    );
  }
}

export default UserClass;

//as soon as the user class gets loaded the constructor was called and when the constructor was called the state variable
//was created with some default value. after the constructor render method called and renders with the default value on to the webpage.
//react will update the component with the dummy data. now componentDidMount was called and api call was made. when this api call made
//it called setState so whenever there is a setState it triggers the reconciliation process and Updating cycle begins. Mounting cycle was finished when the component rendered first.
//setState updates the state variable and when the state variables are updated react tiggers the render method once again.
//constructor was triggered only once but render is called again.
//when render happend with the api data but this time state variable has been changed/updated with the new value.
//now in the update cycle react will now update the dom so react will calculate the diff and it will update the dom with the new value.
//now at last it will call the componentDidUpdate.

//which life cycle method will be called after every render:-
//That lifecycle method is component did update is called after every update.

//in functional componentn using useEffect hook for calling after component rendering
//useEffect(()=>{
//  API CALL
//},[count,count2]); //why using dependency array ?-> b/c initally in class component componentDidUpdate use to render after every update and need to write this way
//componentDidUpdate(pervProps, prevState){
//if(this.state.count !== prevState.count || this.state.count !== prevState.count){ }}
//there can be multiple state variables where might if-else can be used in class component that's why dependency array is used in functional component

//Component Will Unmount will be called when leaving the page
//lot of things need to be cleared when leaving the page. React is a single page application only the component of the page is changing
//
