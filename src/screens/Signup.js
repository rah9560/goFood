import React, { useState } from 'react'
import { Link } from "react-router-dom"
const Signup = () => {
    const [credentails, setcredentials] = useState({ name: "", password: "", email: "", geolocation: "" })

    const handlerequest = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:credentails.name, email:credentails.email,password:credentails.password,location:credentails.geolocation})
        })
        const json=await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }
    }
    const onChange=(e)=>{
        setcredentials({...credentails,[e.target.name]:e.target.value})
    }
    return (
        <div className='container'>
            <div>
                <form className='mt-3' onSubmit={handlerequest}>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control"  name='name' value={credentails.name} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control"  aria-describedby="emailHelp" name="email" value={credentails.email} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control"  name="password" value={credentails.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                        <input type="text" className="form-control"  name="geolocation" value={credentails.geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>

        </div>
    )
}

export default Signup