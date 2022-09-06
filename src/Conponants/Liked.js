import React, { useContext } from "react";
import data from "../Data.json";
import { Button, Tooltip } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Liked.css";
import { Context } from "../App";

const Wishlist = () => {
  let blog = useContext(Context);
  let navigate = useNavigate();

  const likedReadMore = (event) => {
    let click = event.target.closest(".likedBlog").id;
    data.forEach((item) => {
      if (item.id == click) {
        console.log(item);
        blog.setBlog(item);
        navigate("/readmore");
      }
    });
  };
  return (
    <div className="likedSection">
      <div className="likedBlogs">
        {blog.wishList > 0 ? (
          data.map((val, i) => {
            if (val.like) {
              return (
                <div className="likedBlog" key={i} id={val.id}>
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
                      <Button variant="contained" onClick={likedReadMore}>
                        Read More..
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <>
            <div className="errorDiv">
              <h1>Sorry, Nothing to Show!</h1>
              <Link to={"/"} style={{textDecoration:'none', marginLeft:'4vw'}}>
                <Button variant="contained" sx={{backgroundColor:'#ffdb0d', color:'black'}}>Go To Blogs Page</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
