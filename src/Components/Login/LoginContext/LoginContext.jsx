
const LoginContext = () => {
  return (
    <>
    <div className="text-center lg:text-left px-4">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 pr-5">Secure your account with our login page. Easy access, strong protection. Your gateway to a personalized and safe experience. You can also directly join with us using these details</p>
            </div>
          <div className="flex flex-col lg:flex-row gap-6">
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Demo User Details</h2>
              <p>Email: user@bistro.com</p>
              <p>Password: 88888888</p>  
            </div>
          </div> 
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Demo Admin Details</h2>
              <p>Email: admin@bistro.com</p>
              <p>Password: 88888888</p>  
            </div>
          </div>
          </div>
    </>

  )
}

export default LoginContext