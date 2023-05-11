import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface layoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />

      {children}

      <ToastContainer />

    </div>
  );
};

export default Layout;
