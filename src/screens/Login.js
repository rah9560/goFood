import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom"
const Login = () => {
  const [credentails, setcredentials] = useState({ password: "", email: "" })
  let navigate=useNavigate();

  const handlerequest = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentails.email, password: credentails.password })
    })
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials")
    }
    if(json.success){
     localStorage.setItem("authToken",json.authToken)
     console.log(localStorage.getItem("authToken"));
      navigate("/")
    }
  }
  const onChange = (e) => {
    setcredentials({ ...credentails, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className='container'>
        <div>
          <form className='mt-3' onSubmit={handlerequest}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={credentails.email} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={credentails.password} onChange={onChange} />
            </div>
            <button type="submit" className=" m-3 btn btn-success">Submit</button>
            <Link to="/createuser" className="m-3 btn btn-danger">I am a new user</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login