import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
   
    const [mobileClicked, setmobileClicked] = useState(false)

    return ( 
        <nav className="bg-primary text-white lg:text-lg fixed inset-x-0 z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    
                    {/* <!-- logo --> */}
                    <div>
                        <Link href="/">
                            <img className="h-16 w-16 lg:h-20 lg:w-20 mr-1" src="/logo/blue_background.png" alt="logo" />
                        </Link>
                    </div>

                    {/* <!-- primary nav --> */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">Home</Link>
                        <Link href="/about" className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">About</Link>
                        <Link href="/portfolio" className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">Portfolio</Link>
                        <Link href="/contact" className="py-5 cursor-pointer px-3 text-gray-700 hover:text-gray-900">Contact</Link>
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
                <Link href="/"><p className="block py-2 px-4 text-m hover:bg-gray-200">Home</p></Link>
                <Link href="/about"><p className="block py-2 px-4 text-m hover:bg-gray-200">About</p></Link>
                <Link href="/portfolio"><p className="block py-2 px-4 text-m hover:bg-gray-200">Portfolio</p></Link>
                <Link href="/contact"><p className="block py-2 px-4 text-m hover:bg-gray-200">Contact</p></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;