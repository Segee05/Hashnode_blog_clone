import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "../components/Navigation";




 function Contact(){
     
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [age, setage] = useState ("");
    const [gender, setgender] = useState ("");
    const [occupation, setoccupation] = useState("");
    const [ message, setmessage] = useState("");
    const [ emailInfo,setEmailInfo] = useState(false);
    const [ err, setErr] = useState(false);
    const navigate = useNavigate();

    const headleEmailInfo = (e) => {
        e. target.checked ? setEmailInfo(true) : setEmailInfo(false);
        console.log(emailInfo);
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        if ( fname === "" || lname === "" || age === "" || email === "" || phoneNumber === "" || gender === "" || occupation === "" || message === "" ){
         setErr (true);
        return;
     }
     let userInfo = {
        first_name: fname,
        last_name: lname,
        age: age,
        email: email,
        phone: phoneNumber,
        gender: gender,
        occupation: occupation,
        message: message,
        emailPromo: false,
 };
 navigate("/Outcome", {state: userInfo});

    }
 
//  console.log(userInfo);


 return(
        <div className="form-container">
            <Navigation/>
            
        <form className="form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

           <div className="form-grid">
           <div className="form-group"> 
                <label htmlFor="">FirstName</label>
                <input type="text" value={fname} onChange={(e) => setfname(e.target.value)} />
                {err === true && fname === "" ? <span>First Name is Required</span> : null}
            </div>
            <div className="form-group"> 
                <label htmlFor="">Last Name</label>
                <input type="text"value={lname} onChange={(e) => setlname(e.target.value)}/>
                {err === true && lname === "" ? <span>Last Name is Required</span> : null}
            </div>
           </div>
            <div className="form-group"> 
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                {err === true && email === "" ? <span> Email is Required</span> : null}
            </div>

            <div className="form-group"> 
                <label htmlFor="">Phone Number</label>
                <input type="text" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                {err === true && phoneNumber === "" ? <span>Phone Number is Required</span> : null}
            </div>

            <div className="form-group"> 
                <label htmlFor="">Age</label>
                <input type="number" value={age} onChange={(e) => setage(e.target.value)} />
                {err === true && age === "" ? <span>Age Name is Required</span> : null}
            </div>

            <div className="form-group"> 
                <label htmlFor="">Gender</label>
               <select value={gender} onChange={(e) => setgender(e.target.value)}>
                <option value="Select Gender">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Others</option>
               </select>
               {err === true && gender === "" ? <span>Gender is Required</span> : null}
            </div>

            <div className="form-group">
            <label htmlFor="">occupation</label>
               <select value={occupation} onChange={(e) => setoccupation(e.target.value)}>
                <option value="Select Occupation">Select Occupation</option>
                <option value="Doctor">Doctor</option>
                <option value="ICT Personnel">ICT Personnel</option>
                <option value="Nurse">Nurse</option>
                <option value="Famer">Famer</option>
                <option value="Chef">Chef</option>
                <option value="Others">Others</option>
            </select>
            {err === true && occupation === "" ? <span> Occupation is Required</span> : null}
            </div>

            <div className="form-group">
                <label htmlFor="">Message</label>
                <textarea value={message} onChange={(e) => setmessage(e.target.value)} ></textarea>
                {err === true && message === "" ? <span> Message is Required</span> : null}
            </div>
            <div>
                <input type="checkbox" checked = {emailInfo} onChange={headleEmailInfo}/>
                <span htmlFor="">Send promotion to My email</span>
            </div>
            {emailInfo == true ? <span>You have accepted Promotion form Us</span>:null}
            <Btn title = "Submit" bgColor="black" width="100%"/>
            </form>
        </div>

    );
 }

export default Contact;