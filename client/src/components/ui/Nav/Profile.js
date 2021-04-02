import React from "react";

const Profile = (props) => {
  const { user, isAuthenticated } = props;
  console.log(user, isAuthenticated);
  return (
    <div>
      {isAuthenticated} === true ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      ) :(<div>Loading ...</div>)
    </div>
  );
};

export default Profile;
