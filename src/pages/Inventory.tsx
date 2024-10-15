import React, { useState } from 'react';
import { Package, Sword, Shield, Potion } from 'lucide-react';

interface InventoryItem {
  id: number;
  name: string;
  type: 'weapon' | 'armor' | 'potion';
  quantity: number;
}

const Inventory: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([
    { id: 1, name: 'Steel Sword', type: 'weapon', quantity: 1 },
    { id: 2, name: 'Leather Armor', type: 'armor', quantity: 1 },
    { id: 3, name: 'Health Potion', type: 'potion', quantity: 5 },
  ]);

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'weapon':
        return <Sword className="w-6 h-6 text-red-500" />;
      case 'armor':
        return <Shield className="w-6 h-6 text-blue-500" />;
      case 'potion':
        return <Potion className="w-6 h-6 text-green-500" />;
      default:
        return <Package className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getItemIcon(item.type)}
                    <span className="ml-2">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;