import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsappButton from "../components/common/WhatsappButton";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />

      <WhatsappButton />
    </>
  );
};

export default MainLayout;