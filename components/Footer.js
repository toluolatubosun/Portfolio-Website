import { FaTwitterSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="bg-primary w-full py-12 px-4 m-auto">
            <div aria-label="footer" className="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                <div className="my-7 text-base text-color f-f-l">
                    <ul className="md:flex items-center">
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                            <a className="md:flex md:items-center" target="_blank" href="https://twitter.com/king_tolu_7">
                                <div className="grid justify-items-center">
                                    <FaTwitterSquare size={40}/>
                                </div>
                                <p className="p-2">Twitter</p>
                            </a>
                        </li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                            <a className="md:flex md:items-center" target="_blank" href="https://github.com/toluolatubosun">
                                <div className="grid justify-items-center">
                                    <FaGithubSquare size={40}/>
                                </div>
                                <p className="p-2">GitHub</p>
                            </a>
                        </li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                            <a className="md:flex md:items-center" target="_blank" href="https://www.linkedin.com/in/john-olatubosun/">
                                <div className="grid justify-items-center">
                                    <FaLinkedin size={40}/>
                                </div>
                                <p className="p-2">LinkedIn</p>
                            </a>
                        </li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center text-white">
                            <a className="md:flex md:items-center" target="_blank" href="https://www.instagram.com/king_tolu_/">
                                <div className="grid justify-items-center">
                                    <FaInstagramSquare size={40}/>
                                </div>
                                <p className="p-2">Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-sm text-center text-white mb-1 f-f-l">
                    <p className="focus:outline-none">All rights reserved &copy; {(new Date().getFullYear())}</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;