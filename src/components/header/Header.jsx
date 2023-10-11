import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import  './header.scss'

const Header = () => {
    return (
        <div>
            <div className="container">
                <nav className="nav">
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li><NavLink to={'/category'}>Category</NavLink></li>
                        <li><NavLink to={'/product'}>Product</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;