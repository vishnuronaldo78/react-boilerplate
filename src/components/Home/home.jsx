/* eslint-disable quotes */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent, useEffect, useState } from "react";
import { withRouter, Route } from "react-router-dom";

// Components
import NotFound from "../NotFound";
// import "";

const Home = (props) => {

  const type = props.match.params.type;
  console.log("type", type);
  let component;
  switch (type) {
    default:
      component = <NotFound />;
  }
  return <div>{component}</div>;
}

export default withRouter(Home);
