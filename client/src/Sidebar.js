import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {

  return (
    <div className="sidebar">
      
     <div class="twitter-icon"> <svg width="90" height="150" viewBox="0 0 181 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M124 57.7059C121.792 58.5294 119.411 59.0706 116.945 59.3294C119.468 58.0824 121.419 56.1059 122.337 53.7294C119.956 54.9059 117.317 55.7294 114.535 56.2C112.27 54.1765 109.086 53 105.472 53C98.7323 53 93.2256 57.5176 93.2256 63.0941C93.2256 63.8941 93.3403 64.6706 93.5411 65.4C83.3308 64.9765 74.239 60.9529 68.1874 54.8588C67.1262 56.3412 66.5239 58.0824 66.5239 59.9176C66.5239 63.4235 68.675 66.5294 72.0019 68.2941C69.9656 68.2941 68.0727 67.8235 66.4092 67.1176V67.1882C66.4092 72.0824 70.6539 76.1765 76.2753 77.0941C74.4705 77.4993 72.5758 77.5557 70.74 77.2588C71.5189 79.2647 73.0446 81.0198 75.1023 82.2775C77.1601 83.5352 79.6466 84.2322 82.2122 84.2706C77.8632 87.0952 72.4723 88.6219 66.9254 88.6C65.9503 88.6 64.9751 88.5529 64 88.4588C69.4493 91.3294 75.9312 93 82.8719 93C105.472 93 117.891 77.6118 117.891 64.2706C117.891 63.8235 117.891 63.4 117.862 62.9529C120.272 61.5412 122.337 59.7529 124 57.7059Z" fill="black"/>
<rect x="78.5" y="2.5" width="30" height="30" rx="7.5" fill="#00000" stroke="#46ACDF" stroke-width="7"/>
<rect x="78.5" y="116.5" width="30" height="30" rx="7.5" fill="#00000" stroke="#46ACDF" stroke-width="7"/>
<line x1="41" y1="129.5" x2="61" y2="129.5" stroke="black" stroke-width="5"/>
<line x1="41" y1="75.5" x2="61" y2="75.5" stroke="black" stroke-width="5"/>
<line x1="121" y1="75.5" x2="141" y2="75.5" stroke="black" stroke-width="5"/>
<line x1="121" y1="15.5" x2="141" y2="15.5" stroke="black" stroke-width="5"/>
<rect x="2.5" y="116.5" width="30" height="30" rx="7.5" fill="#00000" stroke="#46ACDF" stroke-width="7"/>
<rect x="2.5" y="59.5" width="30" height="30" rx="7.5" fill="#00000" stroke="#46ACDF" stroke-width="7"/>
<line x1="17.5" y1="112" x2="17.5" y2="94" stroke="black" stroke-width="5"/>
<rect x="178.5" y="32.5" width="30" height="30" rx="7.5" transform="rotate(-180 178.5 32.5)" fill="#00000" stroke="#46ACDF" stroke-width="7"/>
<rect x="178.5" y="89.5" width="30" height="30" rx="7.5" transform="rotate(-180 178.5 89.5)" fill="#00000" stroke="#46ACDF" stroke-width="7"/>
<line x1="163.5" y1="37" x2="163.5" y2="55" stroke="black" stroke-width="5"/>
</svg>
</div>

      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
