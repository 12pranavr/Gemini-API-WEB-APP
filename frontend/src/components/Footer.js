import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#3e5172] text-gray-400 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div>
                    <h5 className="text-[#f9b49b] font-bold mb-4">COMPANY</h5>
                    <ul>
                        <li className="mb-2"><Link to="/about" className="hover:text-[#f9b49b]">About</Link></li>
                        <li className="mb-2"><Link to="/careers" className="hover:text-[#f9b49b]">Careers</Link></li>
                        <li className="mb-2"><Link to="/brand" className="hover:text-[#f9b49b]">Brand Center</Link></li>
                        <li className="mb-2"><Link to="/blog" className="hover:text-[#f9b49b]">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-[#f9b49b] font-bold mb-4">HELP CENTER</h5>
                    <ul>
                        <li className="mb-2"><Link to="/discord" className="hover:text-[#f9b49b]">Discord Server</Link></li>
                        <li className="mb-2"><Link to="/twitter" className="hover:text-[#f9b49b]">Twitter</Link></li>
                        <li className="mb-2"><Link to="/facebook" className="hover:text-[#f9b49b]">Facebook</Link></li>
                        <li className="mb-2"><Link to="/contact" className="hover:text-[#f9b49b]">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-[#f9b49b] font-bold mb-4">LEGAL</h5>
                    <ul>
                        <li className="mb-2"><Link to="/privacy" className="hover:text-[#f9b49b]">Privacy Policy</Link></li>
                        <li className="mb-2"><Link to="/licensing" className="hover:text-[#f9b49b]">Licensing</Link></li>
                        <li className="mb-2"><Link to="/terms" className="hover:text-[#f9b49b]">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-[#f9b49b] font-bold mb-4">DOWNLOAD</h5>
                    <ul>
                        <li className="mb-2"><Link to="/ios" className="hover:text-[#f9b49b]">iOS</Link></li>
                        <li className="mb-2"><Link to="/android" className="hover:text-[#f9b49b]">Android</Link></li>
                        <li className="mb-2"><Link to="/windows" className="hover:text-[#f9b49b]">Windows</Link></li>
                        <li className="mb-2"><Link to="/macos" className="hover:text-[#f9b49b]">MacOS</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
