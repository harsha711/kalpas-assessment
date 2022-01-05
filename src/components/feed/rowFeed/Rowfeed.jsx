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
              <button
                onClick={() => viewPost(post)}
                className="btn btn-outline-primary"
              >
                Read More
              </button>
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
