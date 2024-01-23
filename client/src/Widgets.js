import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="VarunSh52699113"
          options={{ height: 800 }}
        />

        <TwitterShareButton
          url={"https://daisy-steam-d3a.notion.site/Portfolio-b6a7baf7e6aa4e4db825096c14cf0b9c"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
