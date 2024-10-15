import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Sword, Package, Zap, BarChart2, DollarSign, Building2, Map } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, text: 'Dashboard', path: '/' },
    { icon: Users, text: 'Users', path: '/users' },
    { icon: Sword, text: 'Characters', path: '/characters' },
    { icon: Package, text: 'Inventory', path: '/inventory' },
    { icon: Zap, text: 'Skills', path: '/skills' },
    { icon: BarChart2, text: 'Levels', path: '/levels' },
    { icon: DollarSign, text: 'Economy', path: '/economy' },
    { icon: Building2, text: 'Organizations', path: '/organizations' },
    { icon: Map, text: 'Zones', path: '/zones' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center mb-6">Gamification Config</h2>
      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="inline-block mr-2 w-5 h-5" />
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;