import "./Footer.css";
import { Link } from 'react-router-dom';

const Foter = () => {

    const today = new Date();


    return (
        // <footer classNameName="py-2">
        //     <div classNameName="container">
        //         <div classNameName="row">
        //             <div classNameName="col-12">
        //                 <p>Chima Ifeanyi &copy; {today.getFullYear()}</p>
        //             </div>
        //         </div>
        //     </div>
        // </footer>

        // footer
        <footer>
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-4">
                        <img src="./images/Mustard logo new.png" alt="" style={{width: "160px"}} />                
                    </div>


                    <div className="col-lg-2 offset-lg-1">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/">Invest</Link></li>
                            <li><Link to="/">Rewards</Link></li>
                            <li><Link to="/">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Usage</h4>
                        <ul>
                            <li><Link to="/">Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><Link to="/">live chat active from 9am - 5pm</Link></li>
                            <li><Link to="/">hi@mustard.ng</Link></li>
                            <li><Link to="/">Press</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Foter