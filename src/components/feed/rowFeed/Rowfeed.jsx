import { Close } from "@mui/icons-material";
import React from "react";
import "./RowFeed.css";

export default function Rowfeed({ posts, removePost, viewPost }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="rowContainer">
          <div className="rowCard">
            <h6>{post.title}</h6>
            <p>
              {`${post.body.substring(0, 25)}...`}
              <span onClick={() => viewPost(post)} className="readMore-btn">
                Read More
              </span>
            </p>
          </div>
          <div className="close" onClick={() => removePost(post.id)}>
            <Close />
          </div>
        </div>
      ))}
    </div>
  );
}
