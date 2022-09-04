import React, { useContext, useState } from "react";
import data from "../Data.json";
import "./Blogs.css";
import { Button, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Context } from "../App";

const Blogs = () => {
  let user = useContext(Context);

  const liked = (event) => {
    let click = event.target.closest('.blog').id;
    data.forEach((item)=>{
        if(item.id == click){
            item.like = true;
            user.setWishlist(++user.wishList);
             
        }else return;
        

    })
  };
  return (
    <div className="blogsPage">
      <div className="centralDiv">
        <img
          src="https://4.bp.blogspot.com/-FCBzQniXQh0/VtBqRr0g8AI/AAAAAAAAB2g/X2SDYn6ekMM/s1600/Buddha%2BQuotes%2Bon%2BLife%2Band%2BLove.jpg"
          alt="blogs"
          width="100%"
          height="100%"
        />
      </div>
      <div className="blogs">
        {data.map((val, i) => {
          return (
            <div className="blog" key={i} id={val.id}>
              <img src={val.image} alt="images" />

              <div className="content">
                <h3>{val.title}</h3>
                <p>{val.content.split(".")[0] + "..."}</p>
              </div>
              <div className="bottomBlog">
                <span className="likeBlog" onClick={liked}>
                  {(val.like) ? (
                    <Tooltip title='liked' arrow><FavoriteIcon id="like" /></Tooltip>
                  ) : (
                    <Tooltip title='like' arrow><FavoriteBorderIcon /></Tooltip>
                  )}
                </span>
                <Button variant="contained">Read More..</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
