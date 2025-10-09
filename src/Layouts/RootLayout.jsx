import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";


const RootLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false)  

    useEffect(()=>{
      setLoading(true)

      const timer = setTimeout(() => setLoading(false),500);

      return () => clearTimeout(timer)
    },[location])

    if(loading) return(
      <LoadingSpinner/>
    )


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
