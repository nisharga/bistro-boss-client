import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef();
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleSubmit = (e) => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        e.preventDefault();
    }
    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
  return (
    <div>
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
                    disabled={disabled}
                >Login</button>
                </div>
            </div>
            </form>
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login