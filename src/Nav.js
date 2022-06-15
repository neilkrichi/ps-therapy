import logo from './logo.png';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <img className="ps-logo" src={logo} />
            </div>
            <div className="navigation">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="booking">
                <button class="book-now">Book an appointment</button>
            </div>
        </div>
    )
}

export default Nav;