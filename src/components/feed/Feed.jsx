import React, { useState, useEffect } from "react";
import ColumnFeed from "./columnFeed/ColumnFeed";
import "./Feed.css";
import Pagination from "./Pagination/Pagination";
import Rowfeed from "./rowFeed/Rowfeed";
import Modal from "./modal/Modal";

const url = " https://jsonplaceholder.typicode.com/posts";

export default function Feed({ toggleVal, feedbackVal }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewPostInfo, setViewPostInfo] = useState({});
  const [maxPageLimit, setMaxPageLimit] = useState(3);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setPosts(fetchedData);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemovePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const handleViewPost = (post) => {
    setIsOpen(true);
    setViewPostInfo(post);
  };

  const handleMinPageLimit = () => {
    if (minPageLimit > 0) {
      setMinPageLimit(minPageLimit - 1);
      setMaxPageLimit(maxPageLimit - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleMaxPageLimit = (val) => {
    if (maxPageLimit < val) {
      setMaxPageLimit(maxPageLimit + 1);
      setMinPageLimit(minPageLimit + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  if (feedbackVal) return null;

  if (loading) {
    return (
      <h2 className="feed" align="center">
        Loading...
      </h2>
    );
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="feed">
      <h3 className="feedTitle">Your News</h3>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        post={viewPostInfo}
      ></Modal>
      {!toggleVal ? (
        <Rowfeed
          posts={currentPosts}
          removePost={handleRemovePost}
          viewPost={handleViewPost}
        />
      ) : (
        <ColumnFeed
          posts={currentPosts}
          removePost={handleRemovePost}
          viewPost={handleViewPost}
        />
      )}
      <div className="paginationContainer">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={handlePaginate}
          pageNumber={currentPage}
          minPageLimit={minPageLimit}
          maxPageLimit={maxPageLimit}
          handleMaxPageLimit={handleMaxPageLimit}
          handleMinPageLimit={handleMinPageLimit}
        />
      </div>
    </div>
  );
}
