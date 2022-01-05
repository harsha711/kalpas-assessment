import React from "react";
import "./ColumnFeed.css";
import { Close } from "@mui/icons-material";

export default function ColumnFeed({ posts, removePost, viewPost }) {
  return (
    <div className="card-columns">
      {posts.map((post) => (
        <div className="card text-center cardContainer" key={post.id}>
          <div className="card-body">
            <div className="closeContainer">
              <div className="cardClose" onClick={() => removePost(post.id)}>
                <Close />
              </div>
            </div>

            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{`${post.body.substring(0, 25)}...`}</p>
            <a
              href="!#"
              className="btn btn-primary"
              onClick={() => viewPost(post)}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
