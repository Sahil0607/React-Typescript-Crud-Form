import React from "react";
import ListData from "../list-data/list-data";
import FormData from "../form-data/form-data";

const Main: React.FC = () => {
  return (
    <>
      <h1>Main Component</h1>
      <FormData />
      <ListData />
    </>
  );
};

export default Main;
