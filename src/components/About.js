import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div> 
        <h1> About</h1>
        <h2> This is a Food Store. Welcome!</h2>
        {/* <User/> */}
        {/*Or can pass data as props from here and can acess in the User file*/}
        <User name={" Jatin Goel"}/> {/* This data in name going as an argument to the User function as a props */}

        <UserClass name={"Jatin Goel (class based component props ex)"} location={"Lucknow-UP"}/> {/* whatever props passed like this are combined into a single object */}
        </div>
    );
};  

export default About;