import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {

  return (
    // Banner
    <section className="banner-image banner-half-circle bg-cover" id="home">
        
        <div className="container vector-pseudo">
            <div className="row align-items-center justify-content-center">

                <div className="col-lg-8 col-md-8 text-center">
                    <h1 className="display-1 text-center header-text">Easiest way to <span>Save</span> & <span>Invest</span> in tangible assets</h1>
                    <p className="mt-3 mb-4 text-white"></p>
                    
                    <p className="my-4 fs-4">Join over 4000 customers achieve their financial goals through savings and investments.</p>
                    
                    <div className="my-5">
                        <a href="#get-started" className="btn btn-brand create-btn ms-3">Create free account <i style={{verticalAlign: "inherit"}} className="ri ri-arrow-right-line"></i></a>
                    </div>

                    <small className="fs-6 login" style={{fontWeight: "500"}}>Already using Mustard.ng? <Link to="">Login</Link></small>

                </div>

            </div>

            {/* CTA */}
            <div className="row my-5">
                <div className="col-12">
                    <img src="./images/ils_09.svg" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero