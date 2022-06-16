import logo from './logo.png';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Nav = () => {

    const link = 'https://jane.app/';
    const handleClick = () => {
        window.open(link, "_blank");
    }

    return (
        <div className="nav-container">
            <div className="logo">
            <Link to="/" ><img className="ps-logo" src={logo} /></Link>
            </div>
            <div className="navigation">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="booking">
                <button onClick={handleClick} className="book-now">Book an appointment</button>
            </div>
        </div>
    )
}

export default Nav;