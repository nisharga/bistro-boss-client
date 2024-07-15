import { Formik } from "formik";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { AuthContext } from "../../Providers/AuthProviders";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'  
import {  useLocation, useNavigate } from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(3, "Name must be at least 3 characters"),
    url: Yup.string()
    .required("url is a required field")
    .min(3, "url must be at least 8 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});



const SignUp = () => { 
  const [errorMessage, setErrorMessage] = useState(null);
  const { createUser, profileUpdate } = useContext(AuthContext)
  const [user, setUser] = useState(null);
  /* const db = getDatabase();
  const auth = getAuth(app); */
 
   // private Route
   let navigate = useNavigate();
   let location = useLocation(); 
   let from = location.state?.from?.pathname || "/";
   // private Route

  return (
    <>
       <Helmet>
            <title>Bistro Boss | Sign Up</title>
        </Helmet>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          const name = values.name; 
          const photoUrl = values.url; 
          const email = values.email; 
          const password = values.password;  
          try{
          createUser(email, password)
            .then(userCredential => {
              const user = userCredential.user
              setUser(user); 
               // Update user profile
              profileUpdate(name, photoUrl)
              const saveData = { name, email, image: photoUrl, role: 'user' }
              console.log("saveData", saveData);
              fetch('https://bistro-boss-server-three-olive.vercel.app/api/v1/user', {
                method: 'POST', 
                headers: { 
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(saveData)
              })
              .then(res => res.json())
              .then(data => {
                if(data.statusCode == 200){
                  Swal.fire(
                    'Sign Up Successful',
                    'Verify Your Email',
                    'success'
                  )
                }
              })

              .then(() => {
                // navigate to homepage
                navigate('/') 
              })
              .catch(err => {
                console.log(err, "Of User Profile Updated");
              })
 
              
            })
            
            
         
 
            
          }
          catch(error){ 
            setErrorMessage(error.message); 
          }

          if(user){
            navigate(from, { replace: true });
          }
        }
      }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">  
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" noValidate onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center pt-5">Sign Up!</h1>
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input  
                  className="input input-bordered" 
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Type Here"  
                  id="name"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input  
                  className="input input-bordered" 
                  type="text"
                  name="url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                  placeholder="Put Your Image URL here"  
                  id="url"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.url && touched.url && errors.url}
                </p>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input  
                  className="input input-bordered" 
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter Your Email"  
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                <input 
                  type="password"
                  name="password" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="password" 
                  className="input input-bordered" 
                /> 
                 {/* If validation is not passed show errors */}
                 <p className="error">
                  {errors.password && touched.password && errors.password}
                </p> 
                </div>
                <div className="form-control mt-6">
                {errorMessage && (
                  <div style={{ color: 'red' }}>{errorMessage}</div>
                )}
                <input 
                  type="submit" 
                  className="btn btn-primary" 
                  value="Sign Up" 
                /> 
                </div>  
            </div> 
            </form>
           
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6 pr-5">Join us today! Create your account with a few simple steps. Unlock exclusive benefits and be part of our community.</p>
            </div>
         </div>
        </div>
        )}
      </Formik>
    </>
  )
}

export default SignUp