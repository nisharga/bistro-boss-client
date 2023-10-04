import { Link } from "react-router-dom"

const NewUserSignUp = () => {
  return (
    <div className="form-control mt-6">
                  <span className='text-[#D1A054]'> New here? 
                    <Link
                        className='font-bold'
                        to="/signup"
                  > Create a New Account</Link></span>
                </div>
  )
}

export default NewUserSignUp