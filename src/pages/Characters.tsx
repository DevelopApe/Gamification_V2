import React, { useState } from 'react';
import { Sword, Shield, Heart } from 'lucide-react';

interface Character {
  id: number;
  name: string;
  level: number;
  class: string;
  attack: number;
  defense: number;
  health: number;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([
    { id: 1, name: 'Warrior', level: 10, class: 'Fighter', attack: 15, defense: 12, health: 100 },
    { id: 2, name: 'Mage', level: 8, class: 'Spellcaster', attack: 20, defense: 8, health: 80 },
    { id: 3, name: 'Rogue', level: 9, class: 'Stealth', attack: 18, defense: 10, health: 90 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <div key={character.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
            <p className="text-gray-600 mb-4">Level {character.level} {character.class}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <Sword className="w-5 h-5 mr-2 text-red-500" />
                Attack: {character.attack}
              </span>
              <span className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                Defense: {character.defense}
              </span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-green-500" />
              Health: {character.health}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;