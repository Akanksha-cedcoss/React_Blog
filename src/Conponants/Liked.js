import React from "react";
import data from "../Data.json";
import { Button, Tooltip } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import "./Liked.css";

const Wishlist = () => {
  return (
    <div className="likedSection">
      <div className="likedBlogs">
        {data.map((val, i) => {
          if (val.like)
            return (
              <div className="likedBlog" key={i}>
                <img id="likedBlog-img" src={val.image} alt="images" />

                <div className="likedcontent">
                  <h3>{val.title}</h3>
                  <p>{val.content.split(".")[0] + "..."}</p>
                </div>
                <div className="likedBottomBlog">
                  <span>
                    &emsp;
                    <Tooltip title="share">
                      <ShareOutlinedIcon sx={{ cursor: "pointer" }} />
                    </Tooltip>
                  </span>
                  <Tooltip title="Click to read the blog" arrow>
                    <Link style={{ textDecoration: "none" }} to={"/readmore"}>
                      <Button variant="contained">Read More..</Button>
                    </Link>
                  </Tooltip>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
