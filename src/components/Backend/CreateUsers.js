import BackendSideBar from "./BackendSideBar";
import { useState } from "react";
import './Backend.css'

function CreateUser(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || phone === "" || email === "" || password === "" ) {
            setErr(true);
            return;
        }
        let users = {
            name: name,
            phone: phone,
            email: email,
            password: password,
            date: new Date().toLocaleString(),
        };
        fetch("http://159.65.21.42:9000/register", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(users),
        })
            .then((resp) => resp.json())
            .then((contact) => {
                alert("User Created");
                console.log(contact);
            })
            .catch((err) => console.log(err));
    };





    return(
        <div className="createuser">
           <BackendSideBar/>
           <div>
           <div>
            <div className="form-users-container">
                <form className="form-users" onSubmit={handleSubmit}>
                    <h2>Create Users</h2>

                    <div className="form-group-users">
                        <label htmlFor=""> Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        {err === true && name === "" ? <span>Full Name Required</span> : null}
                    </div>


                    <div className="form-group-users">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        {err === true && phone === "" ? <span>Phone Number Required</span> : null}
                    </div>

                    <div className="form-group-users">
                        <label htmlFor="">Email Address</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {err === true && email === "" ? <span>Email Address Required</span> : null}
                    </div>


                    <div className="form-group-users">
                        <label htmlFor="">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {err === true && password === "" ? <span>Password Required</span> : null}
                    </div>

                    {/* <Btn title = "Submit" bgColor="black" width="100%"/> */}
                    <button>Submit</button>
                </form>
            </div>

           </div>

                
           </div>

        </div>

    );
}

export default CreateUser;