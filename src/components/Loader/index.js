import React from "react";

const Loader = ({ visible }) => {
  return (
    <div className={`loader ${!visible && "loader__finished"}`}>
      <h2>Loading ...</h2>
    </div>
  );
};

export default Loader;
