import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});



const SignUp = () => { 
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
          const email = values.email; 
          const password = values.password; 
          console.log(email, password);
        }}
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
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
        </div>
        )}
      </Formik>
    </>
  )
}

export default SignUp