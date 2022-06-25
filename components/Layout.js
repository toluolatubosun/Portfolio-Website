import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { Transition } from "@tailwindui/react";
import { useRouter } from "next/router";
import Image from "next/image";

import loader from "../public/loader.svg";

const Layout = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 500);

    useEffect(() => {
        router.events.on("routeChangeComplete", (url, { shallow }) => {
            setLoading(true);
        });
    }, []);

    return (
        <>
            <div>
                <Transition
                    show={loading}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="flex h-screen flex-col justify-center bg-primary">
                        <div className="flex justify-center">
                            <div className="animate-pulse">
                                <Image width={500} height={500} src={loader} alt="loader" />
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>

            <div className={loading ? "hidden" : ""}>
                <div className="font-Montserrat flex flex-col h-screen">
                    <Navbar />
                    <div className="flex-grow break-words mt-28 mb-20">{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
