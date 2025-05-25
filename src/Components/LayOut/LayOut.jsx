import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";

 

const LayOut = () => {
     return (
          <div>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default LayOut;