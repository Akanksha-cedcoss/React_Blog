import React, { useContext, useState } from "react";
import data from "../Data.json";
import logger from "../User.json";
import "./Blogs.css";
import { Alert, Button, Drawer, Fab, Snackbar, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Context } from "../App";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
let edit = "";
const Blogs = () => {
  let user = useContext(Context);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  let [blog2, setBlog2] = useState(data);
  // SnackBar State
  const [openSnack, setSnack] = useState({
    open: false,
    html: "",
    severity: "info",
  });

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
        console.log(item);
        user.setBlog(item);
        navigate("/readmore");
      }
    });
  };

  //Function to delete the self-made blogs
  const deleteBlog = (event) => {
    let click = event.target.closest(".blog").id;
    data.forEach((item, i) => {
      if (item.id == click) {
        data.splice(i, 1);
        setBlog2([...data]);
        setSnack({
          open: true,
          html: "Deleted Successfully",
          severity: "error",
        });
      }
    });
  };

  // Function to create a blog
  const submitBlog = () => {
    let url = document.getElementById("logger-blog-img").files[0];
    let img =
      url !== undefined
        ? URL.createObjectURL(url)
        : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";

    let title = document.getElementById("logger-blog-title").value;
    let content = document.getElementById("logger-blog-content").value;

    if (title === "" || content === "") {
      setOpen(false);
      alert();
    } else if (edit === "") {
      let obj = {
        id: data.length + 1,
        image: img,
        title: title,
        content: content,
        like: false,
        flag: false,
        username: logger[0].name,
      };

      data.push(obj);
      window.location.href = "#bottom";
      setOpen(false);
      setSnack({
        open: true,
        html: "Blog Created Successfully",
        severity: "success",
      });
    } else {
      setBlog2(
        data.splice(+edit.id - 1, 1, {
          id: edit.id,
          image:
            img ===
            "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
              ? edit.image
              : img,
          title: title,
          content: content,
          like: edit.like,
          flag: edit.flag,
          username: logger[0].name,
        })
      );

      window.location.href = "#bottom";
      setOpen(false);
      setSnack({
        open: true,
        html: "Blog Updated Successfully",
        severity: "info",
      });
    }
  };

  // Function to edit the self-made blog
  const editBlog = (event) => {
    let click = event.target.closest(".blog").id;
    data.forEach((item, i) => {
      if (item.id == click) {
        edit = { ...item };
      }
    });
    setOpen(true);
  };

  return (
    <>
      <div className="blogsPage">
        <div className="centralDiv">
          <img
            src="https://4.bp.blogspot.com/-FCBzQniXQh0/VtBqRr0g8AI/AAAAAAAAB2g/X2SDYn6ekMM/s1600/Buddha%2BQuotes%2Bon%2BLife%2Band%2BLove.jpg"
            alt="blogs"
            width="100%"
            height="100%"
            onClick={() => {
              window.scrollTo(0, 500);
            }}
          />
        </div>
        <div className="blogs" id="blogSection">
          {data.map((val, i) => {
            return (
              <div className="blog" key={i} id={val.id}>
                <img src={val.image} alt="images" />

                <div className="content">
                  <span id="bloghead">
                    <h3>{val.title}</h3>
                    <Tooltip title="share">
                      <ShareOutlinedIcon sx={{ cursor: "pointer" }} />
                    </Tooltip>
                  </span>
                  <p>{val.content.split(".")[0] + "..."}</p>
                  <p style={{ textAlign: "right" }}>- {val.username}</p>
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
                    {val.username == logger[0].name && user.isLogin ? (
                      <>
                        <Tooltip title="Edit Blog" arrow>
                          <EditIcon onClick={editBlog} />
                        </Tooltip>
                        &emsp;
                        <Tooltip title="Delete Blog" arrow>
                          <DeleteIcon onClick={deleteBlog} />
                        </Tooltip>
                      </>
                    ) : (
                      ""
                    )}
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
        <Tooltip title="create new blog" arrow>
          <Fab
            color="primary"
            aria-label="edit"
            sx={{ display: user.isLogin ? "block" : "none" }}
          >
            <EditIcon
              onClick={() => {
                edit = "";
                setOpen(true);
              }}
            />
          </Fab>
        </Tooltip>
      </div>

      <div>
        {/* Drawer for ADDING BLOG */}
        <Drawer
          id="drawer"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          anchor="top"
          PaperProps={{
            sx: {
              width: "80%",
              height: "60%",
              margin: "auto",
              padding: "4vw 6vw",
              borderRadius: "0 0 7px 7px",
            },
          }}
        >
          <input
            type={"file"}
            accept="image/*"
            name="img"
            id="logger-blog-img"
          />
          <br />
          <input
            type={"text"}
            placeholder="Enter the title"
            id="logger-blog-title"
            autoFocus
            autoComplete="on"
            defaultValue={edit.title}
          />

          <br />

          <textarea
            id="logger-blog-content"
            placeholder="Enter the content here.."
            defaultValue={edit.content}
          />

          <br />
          <div style={{ textAlign: "right" }}>
            <Button variant="contained" id="submit-btn" onClick={submitBlog}>
              {edit === "" ? "Submit" : "Update"}
            </Button>
          </div>
        </Drawer>
      </div>

      <span
        id="bottom"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <KeyboardArrowUpIcon />
      </span>

      <Snackbar
        open={openSnack.open}
        autoHideDuration={3000}
        onClose={() => {
          setSnack({ open: false, html: "", severity: "info" });
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={openSnack.severity}
          variant="filled"
          onClose={() => {
            setSnack({ open: false, html: "", severity: "info" });
          }}
        >
          {openSnack.html}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Blogs;
