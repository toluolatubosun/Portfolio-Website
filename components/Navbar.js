import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import img_logo_blue from "../public/logo/blue_background.png";

const Navbar = () => {
    const router = useRouter();

    const [mobileClicked, setmobileClicked] = useState(false);

    useEffect(() => {
        router.events.on("routeChangeComplete", (url, { shallow }) => {
            setmobileClicked(false);
        });
    }, []);

    return (
        <nav className="bg-primary text-white lg:text-lg fixed inset-x-0 z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* <!-- logo --> */}
                    <div>
                        <Link passHref href="/">
                            <div className="h-16 w-16 lg:h-20 lg:w-20 mr-1">
                                <Image alt="logo" src={img_logo_blue} />
                            </div>
                        </Link>
                    </div>

                    {/* <!-- primary nav --> */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" passHref className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/about" passHref className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/portfolio" passHref className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">
                            Portfolio
                        </Link>
                        <Link href="/contact" passHref className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>

                    {/* <!-- mobile button goes here --> */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setmobileClicked(!mobileClicked)} className="mobile-menu-button">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- mobile menu --> */}
            <div className={mobileClicked ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                <Link href="/" passHref>
                    <p className="block py-2 px-4 text-m hover:bg-white hover:text-primary">Home</p>
                </Link>
                <Link href="/about" passHref>
                    <p className="block py-2 px-4 text-m hover:bg-white hover:text-primary">About</p>
                </Link>
                <Link href="/portfolio" passHref>
                    <p className="block py-2 px-4 text-m hover:bg-white hover:text-primary">Portfolio</p>
                </Link>
                <Link href="/contact" passHref>
                    <p className="block py-2 px-4 text-m hover:bg-white hover:text-primary">Contact</p>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
