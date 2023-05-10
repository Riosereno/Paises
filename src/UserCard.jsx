import React from 'react';

const UserCard = ({ user }) => {
  return (
    <article key={user.login.uuid} className="w-40">
      <h2>
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <div>
        <img src={user.picture.large} alt={`${user.name.first}`} />
      </div>
      <p>
        Gender: <mark>{user.gender}</mark>
      </p>
      <p>Country: {user.location.country}</p>
    </article>
  );
};

export default UserCard;
