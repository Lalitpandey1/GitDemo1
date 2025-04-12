import React from "react";
import { useParams } from "react-router-dom";

const UserProfiles = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>We have recorded the User ID</h3>
      <h1>User ID :{id}</h1>
    </div>
  );
};

export default UserProfiles;
