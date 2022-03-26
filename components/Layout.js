import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div className="font-Montserrat flex flex-col h-screen">
            <Navbar/>
                <div className="content flex-grow break-words">
                    { children }
                </div>
            <Footer/>
        </div>
   
    );
}
 
export default Layout;