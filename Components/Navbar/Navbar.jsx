import Image from "next/image";
import listicon from "../../public/assets/list.png";

function Navbar(){
    return(<>
    <div className="navbar-container">
        <div className="d-flex row py-2">
                <div className="px-4">
            <div className="justify-content-between d-flex">
<div className="featureTitle"><Image src={listicon} alt="" height={12} width={12}/></div>
<div className="featureTitle">Hello</div>
</div>

            </div>
        </div>
    </div>
    </>)
}
export default Navbar;
