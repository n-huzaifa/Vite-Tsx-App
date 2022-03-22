import React, { useState } from "react";

type Props = {
  title: string;
  body: string;
  imageURL: string;
};

const MediaCard = (props: Props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageURL} alt='' />
    </div>
  );
};

export default MediaCard;
