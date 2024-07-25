import Head from "next/head";
import Navbar from "../Navbar/Navbar"; 

const Layout = ({ children }) =>{
  return (
    <div className="">
      <Head>
        <title>Drag Drop Trello</title>
      </Head>
      <div className="d-flex">
     
      <div className="main-wrapper">
        <Navbar />
        <div className="page-wrapper">
        
          {children}
        </div>
      </div>
      
    
      </div>
    </div>
  );
};

export default Layout;
