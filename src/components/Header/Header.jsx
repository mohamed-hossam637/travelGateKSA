import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Final_Logo.png";

function Header() {
    const [openMopileMenu , setOpenMenu] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);

    const openMenu = () => {
        setOpenMenu(true);
    }
    const closeMenu = () => {
        setOpenMenu(false);
    }
    const toggleDrop = () => {
        openDrop ? setOpenDrop(false) : setOpenDrop(true);
    }

    return <>
    <header className="header py-2 shadow-sm">
        <div className="container">
            <div className="logo w-100 text-center mt-2">
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>

                <div onClick={openMenu} className="mobile-menu-icon sm-show">
                <i class="fa-solid fa-bars-staggered"></i>
                </div>
            </div>
            <nav className="w-100 mt-3 sm-hidden">
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">
                            الرئيسيه
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link>
                            عروض سياحه
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link>
                            عن ترافيل جيت
                        </Link>
                    </li>
                    <li className="nav-link our-services" >
                    خدماتنا
                    <ul >
                        <li>
                        تذاكر طيران
                        </li>
                        <li>
                        فنادق
                        </li>
                        <li>
                        حجز سيارات
                        </li>
                    </ul>
                    </li>
                    <li className="nav-link">
                        <Link>
                            تاشيرات
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link>
                            تواصل معنا
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <div className={`mobile-menu ${openMopileMenu ? 'open' : ''}`}>
        <div className="close" onClick={closeMenu}>
        <i class="fa-regular fa-circle-xmark"></i>
        </div>
        <ul className="links">
        <li className="nav-link" onClick={closeMenu}>
                        <Link to="/">
                            الرئيسيه
                        </Link>
                    </li>
                    <li className="nav-link" onClick={closeMenu}>
                        <Link>
                            عروض سياحه
                        </Link>
                    </li>
                    <li className="nav-link" onClick={closeMenu}>
                        <Link>
                            عن ترافيل جيت
                        </Link>
                    </li>
                    <li className={`nav-link our-services ${openDrop == true ? 'rotate' : ''}`}  onClick={toggleDrop}>
                    خدماتنا
                    <ul className={`p-0 mt-2 ${openDrop == true ? 'open' : ''}`}>
                        <li onClick={closeMenu}>
                        تذاكر طيران
                        </li>
                        <li onClick={closeMenu}>
                        فنادق
                        </li>
                        <li onClick={closeMenu}>
                        حجز سيارات
                        </li>
                    </ul>
                    </li>
                    <li className="nav-link" onClick={closeMenu}>
                        <Link>
                            تاشيرات
                        </Link>
                    </li>
                    <li className="nav-link" onClick={closeMenu}>
                        <Link>
                            تواصل معنا
                        </Link>
                    </li>
        </ul>
    </div>
    </>;
}

export default Header;