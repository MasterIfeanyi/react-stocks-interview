import Login from "./Login/Login"
import Register from "./Register/Register"
import { useState } from "react";

const Auth = () => {

    const [formType, setFormType] = useState("login");

    const toggleForm = (type) => {
        setFormType(type);
    };

  return (
    <section>
        <div className="container">
            <div className="row align-items-stretch">
                <div className="col-lg-6 col-md-6">
                    <img src="./images/card-hand.svg" alt="" />
                </div>
                <div className=" col-lg-6 col-md-6 custom__mt">
                    <div className="outer-shell">
                        <div className="inner__heading">
                            <div className="btn-group">
                                <button
                                    onClick={() => toggleForm("login")}
                                    className={`btn ${formType === "login" ? "btn-tabpanel" : "btn-outline-tabpanel"}`}
                                >
                                    Sign In
                                </button>

                                <button
                                    onClick={() => toggleForm("register")}
                                    className={`btn ${formType === "register" ? "btn-tabpanel" : "btn-outline-tabpanel"}`}
                                >
                                    Register
                                </button>
                            </div>
                        </div>


                        {formType === "login" ? <Login /> : <Register />}

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auth