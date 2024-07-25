import React from "react";
// import "./Sidebar.css";
import { Dashboard,LocalOfferIcon } from "@material-ui/icons";
import Link from "next/link";

function Sidebar(){
  return (
    <div className="sidebar">
      <div className="sidebarWrappper">
        <div className="sidebarMenu">
         
          <ul className="sidebarList">
           
<Link href="/" className="link">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcons"/>
              Dashboard
            </li>
</Link>

<Link href="/" className="link">
            <li className="sidebarListItem active">
              <LocalOfferIcon className="sidebarIcons"/>
              Pos
            </li>
</Link>


          
          
          </ul>

         
        </div>
      </div>
    </div>
  );
};
export default Sidebar;


