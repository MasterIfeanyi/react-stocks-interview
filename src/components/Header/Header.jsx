import "./Header.css";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
            
        <nav className="navbar bg-white slow py-4 navbar-expand-md sticky-top divider">
            <div className="container-fluid px-5">

                <span className="navbar-brand">
                    <img src="./Mustard logo new.png" className="img-fluid" alt="" style={{width: "150px"}} />
                </span>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">          
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="convert" className="nav-link">Convert</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Header