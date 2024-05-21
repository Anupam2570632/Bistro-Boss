import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white md:h-[230px] flex items-center justify-center flex-col md:flex-row gap-0">
                <aside className="bg-[#1f2937] p-10 w-full text-center h-full flex justify-center items-center flex-1">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">Contact Us </h1>
                        <p>abx Street, Bonani, Dhaka</p>
                        <p>+8801234567890</p>
                        <p>mon-fri : 10am to 8pm</p>
                        <p>sat-sun : 12am to 6pm</p>
                    </div>
                </aside>
                <nav className="bg-[#111827] h-full p-10 w-full flex justify-center items-center flex-1">
                    <div className="space-y-4 text-center">
                        <h6 className="footer-title">Follow Us</h6>
                        <p>Join Us On</p>
                        <div className="grid grid-flow-col text-xl gap-4">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center bg-black  text-white">
                <aside className="p-6">
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;