import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);

    const LoadingComplete = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    React.useEffect(() => {
        LoadingComplete();

        router.events.on("routeChangeComplete", () => {
            setLoading(true);
        });
        router.events.on("routeChangeComplete", () => {
            LoadingComplete();
        });
        router.events.on("routeChangeError", () => {
            LoadingComplete();
        });
    }, []);

    return (
        <>
            <div className={`${loading ? "" : "hidden "} loading-animation`}>
                <h1>Loading</h1>
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
