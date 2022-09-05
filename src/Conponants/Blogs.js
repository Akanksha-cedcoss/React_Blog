import React, { useContext, useState } from "react";
import data from "../Data.json";
import "./Blogs.css";
import { Button, Drawer, Fab, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Context } from "../App";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Blogs = () => {
  let user = useContext(Context);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const liked = (event) => {
    let click = event.target.closest(".blog").id;
    data.forEach((item) => {
      if (item.id == click) {
        if (item.like === false) {
          item.like = true;
          user.setWishlist(++user.wishList);
        } else {
          item.like = false;
          user.setWishlist(--user.wishList);
        }
      }
    });
  };

  const readmore = (event) => {
    let click = event.target.closest(".blog").id;
    data.forEach((item) => {
      if (item.id == click) {
        item.flag = true;
        navigate('/readmore');
      }
    });
  };
  return (
    <>
      <div className="blogsPage">
        <div className="centralDiv">
          <Link to={"/readmore"}>
            <img
              src="https://4.bp.blogspot.com/-FCBzQniXQh0/VtBqRr0g8AI/AAAAAAAAB2g/X2SDYn6ekMM/s1600/Buddha%2BQuotes%2Bon%2BLife%2Band%2BLove.jpg"
              alt="blogs"
              width="100%"
              height="100%"
              onClick={() => {
                window.scrollTo(0, 500);
              }}
            />
          </Link>
        </div>
        <div className="blogs" id="blogSection">
          {data.map((val, i) => {
            return (
              <div className="blog" key={i} id={val.id}>
                <img src={val.image} alt="images" />

                <div className="content">
                  <h3>{val.title}</h3>
                  <p>{val.content.split(".")[0] + "..."}</p>
                </div>
                <div className="bottomBlog">
                  <span>
                    <span className="likeBlog" onClick={liked}>
                      {val.like ? (
                        <Tooltip title="liked" arrow>
                          <FavoriteIcon id="like" />
                        </Tooltip>
                      ) : (
                        <Tooltip title="like" arrow>
                          <FavoriteBorderIcon />
                        </Tooltip>
                      )}
                    </span>
                    &emsp;
                    <Tooltip title="share">
                      <ShareOutlinedIcon sx={{ cursor: "pointer" }} />
                    </Tooltip>
                  </span>
                  <Tooltip title="Click to read the blog" arrow>
                    <Button onClick={readmore} variant="contained">
                      Read More..
                    </Button>
                  </Tooltip>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="createBlog">
        <Tooltip title='create new blog' arrow ><Fab color="primary" aria-label="edit">
          <EditIcon
            onClick={() => {
              setOpen(true);
            }}
          />
        </Fab></Tooltip>
      </div>

      <div>
        {/* Drawer */}
        <Drawer
          id="drawer"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          anchor="top"
          PaperProps={{ sx: { width: "100%", height: "50%" } }}
        >
          <input type={'text'} placeholder='Enter title of a blog' />
        </Drawer>
      </div>
    </>
  );
};

export default Blogs;
