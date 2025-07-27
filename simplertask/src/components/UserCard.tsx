import React from "react";

type UserCardProps = {
  name: string;
  email: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, email }) => (
  <div className="card">
    <div className="card-title">{name}</div>
    <div className="card-email">{email}</div>
  </div>
);

export default UserCard; 