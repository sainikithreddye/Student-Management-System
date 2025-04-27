import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin,
  FaGithub,
  FaUniversity
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-4 pb-2 mt-5">
            <div className="container">
                <div className="row">
                    {/* Institution Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="d-flex align-items-center mb-3">
                            <FaUniversity className="me-2 text-warning" />
                            Chaitanya Bharathi Institute of Technology
                        </h5>
                        <p className="d-flex align-items-center small">
                            <MdLocationOn className="me-2" />
                            Gandipet, Hyderabad - 500075, Telangana
                        </p>
                        <p className="d-flex align-items-center small">
                            <MdPhone className="me-2" />
                            +91 40 2419 3256
                        </p>
                        <p className="d-flex align-items-center small">
                            <MdEmail className="me-2" />
                            info@cbit.ac.in
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/" className="text-white text-decoration-none">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/students" className="text-white text-decoration-none">Student List</a>
                            </li>
                            <li className="mb-2">
                                <a href="/add" className="text-white text-decoration-none">Add Student</a>
                            </li>
                            <li>
                                <a href="https://cbit.ac.in" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                                    College Website
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Connect With Us</h5>
                        <div className="social-links d-flex flex-wrap">
                            <a href="https://www.facebook.com" 
                               className="text-white me-3 mb-2 d-flex align-items-center text-decoration-none hover-effect" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="Facebook">
                                <FaFacebook className="me-1" /> Facebook
                            </a>
                            <a href="https://www.twitter.com" 
                               className="text-white me-3 mb-2 d-flex align-items-center text-decoration-none hover-effect" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="Twitter">
                                <FaTwitter className="me-1" /> Twitter
                            </a>
                            <a href="https://www.instagram.com" 
                               className="text-white me-3 mb-2 d-flex align-items-center text-decoration-none hover-effect" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="Instagram">
                                <GrInstagram className="me-1" /> Instagram
                            </a>
                            <a href="https://www.linkedin.com" 
                               className="text-white me-3 mb-2 d-flex align-items-center text-decoration-none hover-effect" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="LinkedIn">
                                <FaLinkedin className="me-1" /> LinkedIn
                            </a>
                            <a href="https://www.github.com" 
                               className="text-white me-3 mb-2 d-flex align-items-center text-decoration-none hover-effect" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               aria-label="GitHub">
                                <FaGithub className="me-1" /> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-3 border-top">
                    <p className="mb-0 small">
                        &copy; {new Date().getFullYear()} Student Management System - CBIT. All Rights Reserved.
                    </p>
                    <p className="small mt-1">
                        Developed by <a href="#" className="text-white text-decoration-none">CSE Department</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
