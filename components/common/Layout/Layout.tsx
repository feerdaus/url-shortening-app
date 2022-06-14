import { FC } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
