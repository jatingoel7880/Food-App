import React from "react";

class UserClass extends React.Component{

    constructor(props){ 
        //this constructor will recieve the props
        //super(props) have to use b/c it is important
        //whenever the instance of the class is created/intialized this constructor in called.
        super(props);

        //state was created whenever class instance is created 
    }
    render(){

        // const {name,location}=this.props //destructing method
        return (
            <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: 7880362153</h4>
             {/* have to use this keyword when passing data as a props  */}
            {/* props can be accessed any where in the class using this keyword */}
            {/* <h2>Name: Jatin</h2> */}
            {/* <h3>Location: Lucknow</h3> */}


            {/* Destructing method  */}
            {/* <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>  */}


{/*       Normal way to render without props 
            <h2>Name: Jatin</h2>
            <h3>Location: Lucknow </h3>
            <h4>Contact: 7880362153</h4> */}
          </div>
        );
    };
};

export default UserClass;