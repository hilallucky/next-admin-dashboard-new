import React from 'react';

interface Friend {
  name: string;
  city: string;
  country: string;
}

interface FriendListTableProps {
  friends: Friend[];
}

const FriendListTable: React.FC<FriendListTableProps> = ({ friends }) => (
  <div className="mb-4">
    <label className="block mb-1">Friend List</label>
    <table className="w-full border border-gray-300">
      <thead>
        <tr>
          <th className="p-2 border border-gray-300">Name</th>
          <th className="p-2 border border-gray-300">City</th>
          <th className="p-2 border border-gray-300">Country</th>
        </tr>
      </thead>
      <tbody>
        {friends.map((friend, index) => (
          <tr key={index}>
            <td className="p-2 border border-gray-300">{friend.name}</td>
            <td className="p-2 border border-gray-300">{friend.city}</td>
            <td className="p-2 border border-gray-300">{friend.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FriendListTable;
