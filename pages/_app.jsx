import dynamic from "next/dynamic";
import "../styles/globals.scss";
// import Sidebar from "../Components/Sidebar/Sidebar";
import Layout from "../Components/Layout/Layout";

// const Layout = dynamic(() => import("../components/Layout/Layout"), {
//   ssr: false,
// });

 function App({ Component, pageProps }) {
  return (
    <>
    
       
        <div className="d-flex">
      {Component &&  <Layout>
          <Component {...pageProps} />
        </Layout>}
        </div>
    
       
    </>
  );
}
export default App;
