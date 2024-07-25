import dynamic from "next/dynamic";
import "../styles/globals.scss";
import Sidebar from "../Components/Sidebar/Sidebar";


const Layout = dynamic(() => import("../Components/Layout/Layout"), {
  ssr: false,
});

function App({ Component, pageProps }) {
  return (
    <>
      <div className="container-fluid ">
      <div className="d-flex ">
        <div className="">
      <Sidebar />
      </div>
        {Component && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </div>
      </div>
    </>
  );
}
export default App;
