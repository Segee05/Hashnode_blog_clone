import './Contact.css'
import user from "../components/images/user.jpg"
import React, { useEffect, useState } from 'react';
import hashnode from "../components/images/hashnode.svg"



function Login(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( email === "" || password === "") {
            setErr(true);
            return;
        }
    }
    //     let users = {
    //         email: email,
    //         password: password,
    //         date: new Date().toLocaleString(),
    //     };
    //     fetch("http://159.65.21.42:9000/register", {
    //         method: "POST",
    //         headers: { "Content-Type": "Application/json" },
    //         body: JSON.stringify(users),
    //     })
    //         .then((resp) => resp.json())
    //         .then((contact) => {
    //             alert("User Created");
    //             console.log(contact);
    //         })
    //         .catch((err) => console.log(err));
    // };





    return (
        <div>
            <div className='hashnode_icon'><img src={hashnode} alt="hashnode" /></div>
            <div className='nav-line'></div>
            <div className='contact_container'>
                <div className='container-xxl'>
                    <div className="form-users-container">
                        <form className="form-users" onSubmit={handleSubmit}>
                            <h2>Login </h2>

                            

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

                            <button>Submit</button>
                        </form>
                    </div>

                </div>
                <div className='register_side'>
                    <p>"It's amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists."</p>
                    <div className='d-flex'>
                        <p>Guillermo David <p>CEO, Vercel</p></p><br />
                       <img src={user} alt="user" />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Login;