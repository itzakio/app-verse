import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-200" >
        {
          navigation.state === "loading" && <h1>Loading...</h1>
        }
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
