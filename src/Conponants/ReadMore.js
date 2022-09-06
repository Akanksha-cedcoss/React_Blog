import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import "./Readmore.css";

const ReadMore = () => {
  let blog = useContext(Context);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blogPage">
      <div className="blog-head">
        <div className="blog-title">
          <h1>{blog.blog.title}</h1>
        </div>
        <br />
        <div>
          <img src={`${blog.blog.image}`} alt="" id="blog-image" />
        </div>
      </div>
      <div className="blog-body">
        <pre style={{ whiteSpace: "pre-wrap" }}>{blog.blog.content}</pre>
        <h2 style={{textAlign:"right", margin:'3vh 0'}}>- {blog.blog.username}</h2>
      </div>
    </div>
  );
};

export default ReadMore;
