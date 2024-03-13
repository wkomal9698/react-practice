import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
           <h1>About Us</h1>
           <h3>This is React practice</h3>
           {/* Functional Component */}
           {/* <User name={"Komal (function)"} location={"Pune"} contact={"@komal_9698"}/> */}
           {/* Class based Component */}
           <UserClass name={"Komal (class)"} location={"Pune"} company={"DS (class)"}/>
           {/* <UserClass name={"Blah (class)"} location={"Pune"} contact={"@komal_9698"}/> */}
        </div>
    )
}

export default About;