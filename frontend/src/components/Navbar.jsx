import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUniversity, FaHome, FaUserGraduate, FaUserPlus } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const location = useLocation();

    // Check if current route matches
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
            <div className="container">
                {/* Logo Section with sleek design */}
                <Link className="navbar-brand d-flex align-items-center text-white" to="/">
                    <span className="fw-bold fs-4">NHGC</span>
                </Link>

                {/* Mobile Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <AiOutlineMenu className="fs-4 text-white" />
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link 
                                className={`nav-link text-white ${isActive('/') ? 'bg-secondary rounded-pill' : 'hover-bg-light'}`}
                                to="/"
                            >
                                <FaHome className="me-2" />
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link 
                                className={`nav-link text-white ${isActive('/students') ? 'bg-secondary rounded-pill' : 'hover-bg-light'}`}
                                to="/students"
                            >
                                <FaUserGraduate className="me-2" />
                                Students
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link 
                                className={`nav-link text-white ${isActive('/add') ? 'bg-secondary rounded-pill' : 'hover-bg-light'}`}
                                to="/add"
                            >
                                <FaUserPlus className="me-2" />
                                Registration
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
