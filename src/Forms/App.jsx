import "./index.css";
import { useState } from "react";

const App = () => {
    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [fullName, setFullName] = useState();
    // const [lastNameNew, setLastNameNew] = useState();

    // const inputEvent = (event) => {
    //     console.log(event.target.value);
    //     setName(event.target.value);
    // }
    // const inputEvent2 = (event) => {
    //     console.log(event.target.value);
    //     setLastName(event.target.value);
    // }

    // const showName = (event) => {
    //     event.preventDefault();
    //     setFullName(name);
    //     setLastNameNew(lastName);
    //     // setFullName(name + " " + lastName);
    // }

    // return (
    //      Withot Form Tag
    //      <div>
    //          <h1>Hello {fullName}</h1>
    //     <input type="text" placeholder="Enter your name" /> 
    //         <input type="text" placeholder="Enter your name" value="" />
    //         <input type="text" placeholder="Enter your name" defaultValue="" />

    //         <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name} />
    //         <button onClick={showName}>Click Me 🤖</button>
    //     </div> 

    // =========================================================
    // For two inputs
    // return (
    //     <div>
    //         <form onSubmit={showName}>
    //             <div>
    //                 <h1>Hello {fullName} {lastNameNew}</h1>
    //                 <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name} />
    //                 <br />
    //                 <input type="text" placeholder="Enter your last name" onChange={inputEvent2} value={lastName} />
    //                 <button type="submit">Click Me</button>
    //             </div>
    //         </form>
    //     </div>
    // )
    // ============================================================================



    // Multiple Inputs
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qualification: ""
    });
    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        // console.log(e.target.placeholder);

        // const value = e.target.value;
        // const name = e.target.name;

        const { name, value } = e.target;
        setFullName((prevValue) => {
            // console.log(prevValue);
            //         if (name === "fName") {
            //             return {
            //                 fname: value,
            //                 lname: prevValue.lname,
            //                 email: prevValue.email,
            //                 phone: prevValue.phone,
            //             }
            //         }
            //         else if (name === "lName") {
            //             return {
            //                 fname: prevValue.fname,
            //                 lname: value,
            //                 email: prevValue.email,
            //                 phone: prevValue.phone
            //             }
            //         }
            //         else if (name === "eMail") {
            //             return {
            //                 fname: prevValue.fname,
            //                 lname: prevValue.lname,
            //                 email: value,
            //                 phone: prevValue.phone,
            //             }
            //         }
            //         else if (name === "phoneN") {
            //             return {
            //                 fname: prevValue.fname,
            //                 lname: prevValue.lname,
            //                 email: prevValue.email,
            //                 phone: value,
            //             }
            //         }


            // Set fields with spread operator(...)
            // if (name === "fName") {
            //     return { ...fullName, fname: value }
            // }
            // else if (name === "lName") {
            //     return { ...fullName, lname: value }
            // }
            // else if (name === "eMail") {
            //     return { ...fullName, email: value }
            // }
            // else if (name === "phoneN") {
            //     return { ...fullName, phone: value }
            // }

            // Another method by using spread operator
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully");
    }


    return (
        <>
            <div>
                <form action="/" onSubmit={handleSubmit}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phone}</p>
                        <p>{fullName.qualification}</p>
                        <input type="text" name="fname" value={fullName.fname} onChange={handleChange} placeholder="Enter your first name" />
                        <br />
                        <input type="text" name="lname" value={fullName.lname} onChange={handleChange} placeholder="Enter your last name" />
                        <br />
                        <input type="email" name="email" value={fullName.email} onChange={handleChange} placeholder="Enter your email" />
                        <br />
                        <input type="tel" name="phone" value={fullName.phone} onChange={handleChange} placeholder="Enter your phone number" />
                        <br />
                        <input type="text" name="qualification" value={fullName.qualification} onChange={handleChange} placeholder="Enter your qualification" />
                        <button type="submit">Click Me</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default App;