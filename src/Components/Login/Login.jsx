import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LoginContext from './LoginContext/LoginContext';
import NewUserSignUp from './LoginContext/NewUserSignUp';

const Login = () => {
    const {loginUser} = useContext(AuthContext)  
    const [disabledButton, setdisabledButton] = useState(true)
    const [user, setUser] = useState(true)

    // private Route
    let navigate = useNavigate();
    let location = useLocation(); 
    let from = location.state?.from?.pathname || "/";
    // private Route

    const captchaRef = useRef();
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleSubmit = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        if(user){
            navigate(from, { replace: true });
        }
        e.preventDefault();
    }
     

    const handleValidate = (e) => {
        const user_captcha_value = captchaRef.current.value; 
        if (validateCaptcha(user_captcha_value)) {
            setdisabledButton(false)
        }
        e.preventDefault();
    }
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">  
            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center pt-5">Login now!</h1>
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password"name="password" placeholder="password" className="input input-bordered" /> 
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control">
                <label className="label"> 
                    < LoadCanvasTemplate reloadColor="red" /> 
                </label>
                <input
                ref={captchaRef} 
                type="text"name="capcha" placeholder="Type The Capcha Above" className="input input-bordered" />
                <button onClick={handleValidate} className="btn btn-outline btn-info mt-3">Validate</button>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary"
                    disabled={disabledButton}
                >Login</button>
                </div> 
                {/* New User Sign Up */}
                <NewUserSignUp/>
            </div>
            </form>
            {/* Login Content Left Side */}
            <LoginContext/>
        </div>
        </div>
    </div>
  )
}

export default Login