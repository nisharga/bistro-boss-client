/* eslint-disable no-unused-vars */
import { useContext , useState } from 'react'; 
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LoginContext from './LoginContext/LoginContext';
import NewUserSignUp from './LoginContext/NewUserSignUp';

const Login = () => {
    const {loginUser} = useContext(AuthContext)  
    // const [disabledButton, setdisabledButton] = useState(true)
    const [user, setUser] = useState(true)

    const [email, setEmail] = useState('user@bistro.com')
    const [password, setPassword] = useState('88888888')

    // private Route
    let navigate = useNavigate();
    let location = useLocation(); 
    let from = location.state?.from?.pathname || "/";
    // private Route

   /*  const captchaRef = useRef();
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []) */

    const handleSubmit = (e) => { 
        const userEmail = email;
        const userPassword = password;
        loginUser(userEmail, userPassword)
        .then(result => {
            const user = result.user; 
            setUser(user)
            if(result?.user?.email == "admin@bistro.com"){
                navigate('/dashboard/admin-dashboard', { replace: true });
            }
            else{
                navigate(from, { replace: true });
            }
        })
         
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
                <input type="text" value={email} name="email" placeholder="email" className="input input-bordered" 
                onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} name="password" placeholder="password" className="input input-bordered" 
                onChange={(e) => setPassword(e.target.value)}  />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                {/* <div className="form-control">
                <label className="label"> 
                    < LoadCanvasTemplate reloadColor="red" /> 
                </label>
                <input
                ref={captchaRef} 
                type="text"name="capcha" placeholder="Type The Capcha Above" className="input input-bordered" />
                <button onClick={handleValidate} className="btn btn-outline btn-info mt-3">Validate</button>
                </div> */}
                <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit"
                    // disabled={disabledButton}
                >Login</button>
                </div> 
                {/* New User Sign Up */}
                <NewUserSignUp/>
            </div>
            </form>
            {/* Login Content Left Side */}
            <div className="">
            <LoginContext/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login