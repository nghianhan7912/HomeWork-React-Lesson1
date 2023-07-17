import React from "react";

const Banner = () => {
  return (
    <div className="container my-5 ">
      <div className="bg-light p-5" style={{margin:"0 130px"}}>
        <h1 className="display-1">A Warm Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ipsam dicta, sed mollitia, odit quos, nobis ab ut soluta totam id sunt
          aliquid quisquam quas labore. Quod at sequi laboriosam.
        </p>
        <button className="btn btn-success">Call to action</button>
      </div>
    </div>
  );
};

export default Banner;
