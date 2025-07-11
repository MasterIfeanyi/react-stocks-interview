import Login from "./Login/Login"
import Register from "./Register/Register"
import { useState } from "react";

const Auth = () => {

    const [formType, setFormType] = useState("login");


  return (
    <section>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-6 col-md-6">
                    <img src="./images/card-hand.svg" alt="" />
                </div>
                <div className=" col-lg-6 col-md-6 custom__mt">
                    <div className="outer-shell">
                        <div className="inner__heading">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auth