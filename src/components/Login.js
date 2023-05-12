// import React, { useState } from "react";
// import './login.css'

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//         </div>
//     )
// }
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"
const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/adminadd")
                }
            }
        }

    }

    return (
        <>
            <div className='abc'>
            <div className="container mt-3">
                <section >
                    <div  style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3><br></br>
                        <Form >

                            <Form.Group className=" text-center mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type=" text-center email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
<br></br>
                            <Form.Group className=" text-center mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type=" password" name='password' onChange={getdata} placeholder="Password" />
                                </Form.Group>
                                <br></br>  <div class="center">
                            <Button variant="primary" className='text-center col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                               Submit
                            </Button>
                            <br></br><p className='mt-3'>Don't have a account <br></br><span style={{color:"red"}}><Link className='hover:text-violet-900 transition' to='/register'>SignUp </Link></span> </p>
                            </div>
                        </Form>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
            </div>
            <br></br><br></br><br></br><br></br>
        </>
    )
}

export default Login