import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Users', value: 400 },
  { name: 'Characters', value: 300 },
  { name: 'Items', value: 200 },
  { name: 'Skills', value: 150 },
  { name: 'Zones', value: 50 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">System Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            <li>New user registered</li>
            <li>Character level up</li>
            <li>New item added to inventory</li>
            <li>Skill unlocked</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Create User</button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add Item</button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Define Skill</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;