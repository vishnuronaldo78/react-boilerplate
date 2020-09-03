import React from "react";
import { Result } from "antd";
import { withRouter } from "react-router-dom";
const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry! the page you visited does not exist"
    />
  );
};

export default withRouter(NotFound);
