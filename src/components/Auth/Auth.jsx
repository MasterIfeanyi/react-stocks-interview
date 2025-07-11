import Login from "./Login/Login"
import Register from "./Register/Register"

const Auth = () => {


  return (
    <section>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-6 col-md-6">
                    <img src="./images/card-hand.svg" alt="" />
                </div>
                <div className=" col-lg-6 col-md-6">
                    <Register />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auth