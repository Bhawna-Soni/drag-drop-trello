import React from "react";
// import "./Sidebar.css";
import Link from "next/link";
import Image from "next/image";
import dashboard from "../../public/assets/dashboard.png";
import orderlist from "../../public/assets/check-list.png";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrappper px-1">
        <div className="sidebarMenu pt-4">
          <ul className="sidebarList ">
            <Link href="/" className="link">
              <li className="sidebarListItem ">
                {/* <Dashboard className="sidebarIcons" /> */}
                <Image src={dashboard} alt="" height={15} width={15} className="sidebarIcons "/>
                Dashboard
              </li>
            </Link>

            
              <li className="sidebarListItem ">
                {/* <LocalOfferIcon className="sidebarIcons" /> */}
                <Image src={dashboard} alt="" height={15} width={15} className="sidebarIcons "/>
                Pos
              </li>
              <Link href="/order_status" className="link">
              <li className="sidebarListItem ">
                {/* <LocalOfferIcon className="sidebarIcons" /> */}
                <Image src={orderlist} alt="" height={15} width={15} className="sidebarIcons "/>
                Order Status Screen
              </li>
              </Link>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
