import React from "react";
import ListData from "../list-data/list-data";
import FormData from "../form-data/form-data";
import CostcoMain from "../costco-task/costco-main";

const Main: React.FC = () => {
  return (
    <>
      <h1>Main Component</h1>
      <FormData />
      <ListData />
      <CostcoMain />
    </>
  );
};

export default Main;
