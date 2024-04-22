import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  //useParams is a hook that will fetch us the id passed on at url
  return (
    <div>
      <h2>Hello {id}</h2>
    </div>
  );
};

export default User;
