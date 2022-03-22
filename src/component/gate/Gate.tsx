import React from "react";

type Props = {};

const Gate = (props: Props) => {
  let isOpen: boolean = true;
  return <div>{isOpen ? "true" : "false"}</div>;
};

export default Gate;
