import Login from "./Login/Login"
import Register from "./Register/Register"

const Auth = () => {


  return (
    <section>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-4 col-md-6">
                    
                </div>
                <div className="offset-lg-1 col-lg-7 col-md-6">
                    <Register />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auth